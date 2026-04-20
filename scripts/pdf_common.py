"""
AEGIDA PDF — common helpers for dossier and white paper generators.

Palette: navy-ink (cover), ivory (body), steel accents. No gold.
Fonts: Helvetica (body) + JetBrainsMono-Regular TTF (kicker, mono).
Page size: A4.
"""

from pathlib import Path
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import Paragraph, Spacer

# ---- Palette ----------------------------------------------------------------

NAVY_INK = HexColor("#0B1220")
IVORY = HexColor("#FAFAF9")
STEEL = HexColor("#4A6583")
STEEL_HI = HexColor("#6B84A0")
SLATE = HexColor("#5E6B82")
NAVY_LINE = HexColor("#D8DCE2")
INK_200 = HexColor("#C7D0DE")

# ---- Font registration ------------------------------------------------------

FONTS_DIR = Path(__file__).parent / "fonts"
JETBRAINS_TTF = FONTS_DIR / "JetBrainsMono-Regular.ttf"


def register_fonts():
    """Register JetBrainsMono TTF. Call once at module import in scripts."""
    if not JETBRAINS_TTF.exists():
        raise FileNotFoundError(
            f"Font TTF non trovato: {JETBRAINS_TTF}\n"
            "Eseguire: curl -L -o scripts/fonts/JetBrainsMono-Regular.ttf "
            "https://github.com/JetBrains/JetBrainsMono/raw/v2.304/fonts/ttf/JetBrainsMono-Regular.ttf"
        )
    pdfmetrics.registerFont(TTFont("JetBrainsMono", str(JETBRAINS_TTF)))


# ---- Page geometry ----------------------------------------------------------

A4_MARGIN_LR = 22 * mm
A4_MARGIN_TB = 22 * mm


# ---- Styles -----------------------------------------------------------------

_base = getSampleStyleSheet()


def make_styles():
    """Return a dict of ParagraphStyles for body pages (ivory background)."""
    return {
        "h1": ParagraphStyle(
            "h1", parent=_base["Heading1"], fontName="Helvetica-Bold",
            fontSize=18, leading=24, textColor=NAVY_INK, alignment=TA_LEFT,
            spaceBefore=18, spaceAfter=8,
        ),
        "h2": ParagraphStyle(
            "h2", parent=_base["Heading2"], fontName="Helvetica-Bold",
            fontSize=12, leading=16, textColor=NAVY_INK, alignment=TA_LEFT,
            spaceBefore=14, spaceAfter=6,
        ),
        "kicker": ParagraphStyle(
            "kicker", parent=_base["BodyText"], fontName="JetBrainsMono",
            fontSize=8, leading=12, textColor=STEEL, alignment=TA_LEFT,
            spaceBefore=6, spaceAfter=2,
        ),
        "body": ParagraphStyle(
            "body", parent=_base["BodyText"], fontName="Helvetica",
            fontSize=10, leading=15, textColor=NAVY_INK, alignment=TA_JUSTIFY,
            spaceAfter=8,
        ),
        "body_left": ParagraphStyle(
            "body_left", parent=_base["BodyText"], fontName="Helvetica",
            fontSize=10, leading=15, textColor=NAVY_INK, alignment=TA_LEFT,
            spaceAfter=8,
        ),
        "mono": ParagraphStyle(
            "mono", parent=_base["BodyText"], fontName="JetBrainsMono",
            fontSize=9, leading=13, textColor=NAVY_INK, alignment=TA_LEFT,
            leftIndent=0, spaceAfter=6,
        ),
        "caption": ParagraphStyle(
            "caption", parent=_base["BodyText"], fontName="Helvetica-Oblique",
            fontSize=8, leading=12, textColor=SLATE, alignment=TA_CENTER,
            spaceAfter=12,
        ),
        "disclaimer": ParagraphStyle(
            "disclaimer", parent=_base["BodyText"], fontName="Helvetica-Oblique",
            fontSize=8, leading=12, textColor=SLATE, alignment=TA_JUSTIFY,
            spaceAfter=6,
        ),
        "pullquote": ParagraphStyle(
            "pullquote", parent=_base["BodyText"], fontName="Helvetica",
            fontSize=12, leading=18, textColor=NAVY_INK, alignment=TA_LEFT,
            leftIndent=12, rightIndent=12, spaceBefore=8, spaceAfter=12,
        ),
    }


# ---- Cover ------------------------------------------------------------------

def cover_flowables(document_type_kicker, title, subtitle, publication_date, version, locale):
    """Return a list of flowables that render the cover page content."""
    cover_styles = {
        "brand": ParagraphStyle(
            "cover_brand", fontName="JetBrainsMono", fontSize=16,
            leading=20, textColor=HexColor("#E8ECF2"), alignment=TA_LEFT,
            spaceAfter=120,
        ),
        "kicker": ParagraphStyle(
            "cover_kicker", fontName="JetBrainsMono", fontSize=10,
            leading=14, textColor=STEEL_HI, alignment=TA_LEFT,
            spaceAfter=10,
        ),
        "title": ParagraphStyle(
            "cover_title", fontName="Helvetica-Bold", fontSize=32, leading=38,
            textColor=HexColor("#E8ECF2"), alignment=TA_LEFT, spaceAfter=14,
        ),
        "subtitle": ParagraphStyle(
            "cover_subtitle", fontName="Helvetica", fontSize=14, leading=20,
            textColor=INK_200, alignment=TA_LEFT, spaceAfter=40,
        ),
        "meta": ParagraphStyle(
            "cover_meta", fontName="JetBrainsMono", fontSize=8,
            leading=12, textColor=STEEL_HI, alignment=TA_LEFT,
        ),
    }
    return [
        Paragraph("AEGIDA", cover_styles["brand"]),
        Paragraph(document_type_kicker.upper(), cover_styles["kicker"]),
        Paragraph(title, cover_styles["title"]),
        Paragraph(subtitle, cover_styles["subtitle"]),
        Spacer(1, 180),
        Paragraph(
            f"{publication_date.upper()} &nbsp;&nbsp;·&nbsp;&nbsp; {version.upper()} &nbsp;&nbsp;·&nbsp;&nbsp; {locale.upper()}",
            cover_styles["meta"],
        ),
    ]


def make_cover_background_drawer():
    """Returns a function suitable for SimpleDocTemplate(onFirstPage=...)."""
    def _draw(canv, doc):
        canv.saveState()
        canv.setFillColor(NAVY_INK)
        canv.rect(0, 0, A4[0], A4[1], stroke=0, fill=1)
        canv.restoreState()
    return _draw


# ---- Footer -----------------------------------------------------------------

def make_footer_drawer():
    """Returns a function for SimpleDocTemplate(onLaterPages=...)."""
    def _draw(canv, doc):
        canv.saveState()
        canv.setStrokeColor(NAVY_LINE)
        canv.setLineWidth(0.4)
        canv.line(A4_MARGIN_LR, 14 * mm, A4[0] - A4_MARGIN_LR, 14 * mm)
        canv.setFont("JetBrainsMono", 7)
        canv.setFillColor(SLATE)
        canv.drawString(A4_MARGIN_LR, 9 * mm, "AEGIDA")
        page_num = canv.getPageNumber()
        canv.drawRightString(A4[0] - A4_MARGIN_LR, 9 * mm, f"Pagina {page_num}")
        canv.restoreState()
    return _draw
