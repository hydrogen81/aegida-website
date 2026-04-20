'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ------------------------------------------------------------------ */
/*  Types & constants                                                  */
/* ------------------------------------------------------------------ */

interface Packet {
  id: number
  time: string
  src: string
  dst: string
  protocol: string
  port: string
  length: number
  info: string
}

const COLORS: Record<string, string> = {
  TOR: '#ef4444',
  OpenVPN: '#f97316',
  WireGuard: '#a855f7',
  'SSH Tunnel': '#ec4899',
  'DNS-over-TOR': '#ef4444',
  'TLSv1.3': '#22c55e',
}

const SRC_IPS = ['192.168.1.10', '192.168.1.22', '10.0.1.15', '192.168.1.5', '10.0.1.30']

/* DPI-visible packets (AEGIDA OFF) */
const PACKETS_OFF = [
  { proto: 'TOR', dst: '185.220.101.4', port: '9001', info: 'Circuit Create (0x80) → Relay handshake' },
  { proto: 'TOR', dst: '185.220.101.4', port: '9001', info: 'Relay Data [encrypted cell 509 bytes]' },
  { proto: 'TOR', dst: '193.11.114.43', port: '9030', info: 'Directory Request — consensus download' },
  { proto: 'OpenVPN', dst: '10.8.0.1', port: '1194', info: 'P_CONTROL_V1 Key Exchange [TLS handshake]' },
  { proto: 'OpenVPN', dst: '10.8.0.1', port: '1194', info: 'P_DATA_V2 Encrypted payload (0x48)' },
  { proto: 'WireGuard', dst: '10.0.0.1', port: '51820', info: 'Handshake Initiation [Noise_IK]' },
  { proto: 'WireGuard', dst: '10.0.0.1', port: '51820', info: 'Transport Data [counter: 0x001a4f]' },
  { proto: 'SSH Tunnel', dst: '198.51.100.22', port: '22', info: 'SSH-2.0 Channel Open → port-forward' },
  { proto: 'SSH Tunnel', dst: '198.51.100.22', port: '22', info: 'SSH_MSG_CHANNEL_DATA [encapsulated]' },
  { proto: 'TOR', dst: '62.210.105.116', port: '443', info: 'obfs4 Handshake [bridge transport]' },
  { proto: 'DNS-over-TOR', dst: '185.220.101.4', port: '9053', info: 'Onion Resolve → .onion address lookup' },
  { proto: 'OpenVPN', dst: '10.8.0.1', port: '1194', info: 'P_ACK_V1 Acknowledgement [session 0x7f]' },
  { proto: 'WireGuard', dst: '10.0.0.1', port: '51820', info: 'Handshake Response [ephemeral key]' },
  { proto: 'TOR', dst: '185.220.101.4', port: '9001', info: 'Relay Extend2 → next hop circuit build' },
  { proto: 'SSH Tunnel', dst: '198.51.100.22', port: '22', info: 'SSH_MSG_KEXINIT [diffie-hellman-group14]' },
]

/* Stealth packets (AEGIDA ON) */
const HTTPS_DSTS = ['93.184.216.34', '104.16.132.229', '151.101.1.69', '172.217.14.206', '13.107.42.14', '31.13.92.36']
const HTTPS_INFOS = [
  'Application Data [TLS 1.3 encrypted]',
  'Application Data [0x17 record layer]',
  'Application Data [seq 0x00002f4a]',
  'Application Data [encrypted payload]',
  'Change Cipher Spec, Application Data',
  'Application Data [AEAD protected]',
  'Application Data [post-handshake]',
  'Application Data [0x17 AES-256-GCM]',
]

let packetCounter = 0

function generatePacketOff(time: number): Packet {
  const tpl = PACKETS_OFF[Math.floor(Math.random() * PACKETS_OFF.length)]
  packetCounter++
  return {
    id: packetCounter,
    time: time.toFixed(6),
    src: SRC_IPS[Math.floor(Math.random() * SRC_IPS.length)],
    dst: tpl.dst,
    protocol: tpl.proto,
    port: tpl.port,
    length: 60 + Math.floor(Math.random() * 1400),
    info: tpl.info,
  }
}

function generatePacketOn(time: number): Packet {
  packetCounter++
  return {
    id: packetCounter,
    time: time.toFixed(6),
    src: SRC_IPS[Math.floor(Math.random() * SRC_IPS.length)],
    dst: HTTPS_DSTS[Math.floor(Math.random() * HTTPS_DSTS.length)],
    protocol: 'TLSv1.3',
    port: '443',
    length: 60 + Math.floor(Math.random() * 1400),
    info: HTTPS_INFOS[Math.floor(Math.random() * HTTPS_INFOS.length)],
  }
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function PacketInspector() {
  const [aegidaOn, setAegidaOn] = useState(false)
  const [packets, setPackets] = useState<Packet[]>([])
  const [totalPackets, setTotalPackets] = useState(0)
  const listRef = useRef<HTMLDivElement>(null)
  const timeRef = useRef(0)

  const addPacket = useCallback(() => {
    timeRef.current += 0.02 + Math.random() * 0.15
    const pkt = aegidaOn
      ? generatePacketOn(timeRef.current)
      : generatePacketOff(timeRef.current)
    setPackets(prev => {
      const next = [...prev, pkt]
      return next.length > 50 ? next.slice(-50) : next
    })
    setTotalPackets(prev => prev + 1)
  }, [aegidaOn])

  useEffect(() => {
    const interval = setInterval(addPacket, 350 + Math.random() * 300)
    return () => clearInterval(interval)
  }, [addPacket])

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight
    }
  }, [packets])

  // Reset on toggle
  useEffect(() => {
    setPackets([])
    setTotalPackets(0)
    timeRef.current = 0
    packetCounter = 0
  }, [aegidaOn])

  // Detected protocols
  const detectedProtocols = aegidaOn
    ? []
    : Array.from(new Set(packets.map(p => p.protocol)))

  const dpiScore = aegidaOn ? 0 : Math.min(100, Math.round(detectedProtocols.length * 20))

  return (
    <div className="w-full rounded-lg border border-navy-700 overflow-hidden bg-[#0c0c0c] font-mono text-xs">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#1a1a2e] border-b border-navy-700">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-slate-400 text-xs tracking-wide">
            AEGIDA Packet Inspector — eth0
          </span>
        </div>

        {/* Toggle */}
        <button
          onClick={() => setAegidaOn(!aegidaOn)}
          className={`relative flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-500 ${
            aegidaOn
              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/50'
              : 'bg-red-500/20 text-red-400 border border-red-500/50'
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${aegidaOn ? 'bg-emerald-400 animate-pulse' : 'bg-red-400 animate-pulse'}`} />
          AEGIDA {aegidaOn ? 'ON' : 'OFF'}
        </button>
      </div>

      {/* Stats bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#111125] border-b border-navy-800 text-[10px]">
        <div className="flex gap-6">
          <span className="text-slate-500">
            Packets: <span className="text-slate-300">{totalPackets}</span>
          </span>
          <span className="text-slate-500">
            Displayed: <span className="text-slate-300">{packets.length}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-slate-500">DPI Detection:</span>
          <motion.span
            key={aegidaOn ? 'on' : 'off'}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className={`font-bold ${aegidaOn ? 'text-emerald-400' : 'text-red-400'}`}
          >
            {dpiScore}%
          </motion.span>
        </div>
      </div>

      {/* Column headers */}
      <div className="grid grid-cols-[70px_130px_130px_90px_50px_50px_1fr] gap-0 px-4 py-1.5 bg-[#15152a] border-b border-navy-800 text-[10px] text-slate-500 uppercase tracking-wider">
        <span>Time</span>
        <span>Source</span>
        <span>Destination</span>
        <span>Protocol</span>
        <span>Port</span>
        <span>Len</span>
        <span>Info</span>
      </div>

      {/* Packet list */}
      <div
        ref={listRef}
        className="h-[360px] overflow-y-auto overflow-x-hidden scrollbar-thin"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#1e2a45 #0c0c0c' }}
      >
        <AnimatePresence initial={false}>
          {packets.map((pkt) => (
            <motion.div
              key={pkt.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className="grid grid-cols-[70px_130px_130px_90px_50px_50px_1fr] gap-0 px-4 py-[3px] border-b border-navy-900/50 hover:bg-navy-800/30 transition-colors"
            >
              <span className="text-slate-600 text-[10px]">{pkt.time}</span>
              <span className="text-slate-400 text-[10px]">{pkt.src}</span>
              <span className="text-slate-400 text-[10px]">{pkt.dst}</span>
              <span
                className="text-[10px] font-bold"
                style={{ color: COLORS[pkt.protocol] || '#94a3b8' }}
              >
                {pkt.protocol}
              </span>
              <span className="text-slate-500 text-[10px]">{pkt.port}</span>
              <span className="text-slate-600 text-[10px]">{pkt.length}</span>
              <span className="text-slate-500 text-[10px] truncate">{pkt.info}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom panel — Detected Protocols */}
      <div className="px-4 py-3 bg-[#111125] border-t border-navy-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">Protocols detected:</span>
            <AnimatePresence mode="popLayout">
              {aegidaOn ? (
                <motion.span
                  key="none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-[10px] text-emerald-400 font-bold"
                >
                  NONE — All traffic appears as standard HTTPS
                </motion.span>
              ) : (
                detectedProtocols.map(proto => (
                  <motion.span
                    key={proto}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="text-[10px] px-2 py-0.5 rounded border font-bold"
                    style={{
                      color: COLORS[proto] || '#94a3b8',
                      borderColor: (COLORS[proto] || '#94a3b8') + '40',
                    }}
                  >
                    {proto}
                  </motion.span>
                ))
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[10px] text-slate-500">Status:</span>
            <motion.div
              key={aegidaOn ? 'stealth' : 'exposed'}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                aegidaOn
                  ? 'text-emerald-400 bg-emerald-400/10 border border-emerald-400/30'
                  : 'text-red-400 bg-red-400/10 border border-red-400/30'
              }`}
            >
              {aegidaOn ? '● STEALTH' : '● EXPOSED'}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
