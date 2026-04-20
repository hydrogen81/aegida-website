/* ------------------------------------------------------------------ */
/*  Translations type — covers ALL text content across the site        */
/* ------------------------------------------------------------------ */

export interface Translations {
  /* ================================================================ */
  /*  Navigation                                                       */
  /* ================================================================ */
  nav: {
    privacyPhone: string
    framework: string
    blog: string
    chiSiamo: string
    contatti: string
    richiedi: string
    // deprecated keys kept for transitional compatibility
    prodotti: string
    settori: string
    conformita: string
    aegidaConnect: string
    openMenu: string
    closeMenu: string
  }

  /* ================================================================ */
  /*  Footer                                                           */
  /* ================================================================ */
  footer: {
    copyright: string
    location: string
    privacy: string
    cookie: string
    payoff: string
  }

  /* ================================================================ */
  /*  Home page                                                        */
  /* ================================================================ */
  home: {
    // New keys (bonifica 2026)
    hero: {
      title: string
      subtitle: string
      ctaPrimary: string
      ctaSecondary: string
      // Legacy keys — kept for HomeContent.tsx until Task 11 refactor
      classification?: string
      description?: string
      stats?: { value: string; label: string }[]
    }

    istituzionale: {
      body: string
    }

    prodotti: {
      label: string
      privacyPhone: {
        name: string
        claim: string
        cta: string
      }
      framework: {
        name: string
        claim: string
        cta: string
      }
    }

    proofPreview: {
      label: string
      title: string
      body: string
      cta: string
    }

    ctaFinale: {
      title: string
      subtitle: string
      cta: string
    }

    // Legacy sections — kept for HomeContent.tsx until Task 11 refactor
    threatTicker?: { label: string }
    products?: {
      sectionLabel: string
      title: string
      card1: { title: string; specs: string; description: string; features: string[]; cta: string }
      card2: { title: string; specs: string; description: string; features: string[]; cta: string }
      card3: { title: string; badge: string; specs: string; description: string; features: string[]; cta: string }
    }
    sectors?: { sectionLabel: string; title: string; items: { title: string; description: string }[] }
    threats?: { sectionLabel: string; title: string; items: { name: string; vector: string; countermeasure: string }[] }
    compliance?: { sectionLabel: string; title: string; subtitle: string; cta: string; badges: string[]; note: string }
    contact?: {
      sectionLabel: string
      title: string
      info: { companyName: string; productLabel: string; webLabel: string; sedeLabel: string; sedeValue: string; pivaLabel: string; briefingNote: string }
      form: ContactFormTranslations
    }
  }

  /* ================================================================ */
  /*  Contact Form (shared)                                            */
  /* ================================================================ */
  contactForm: ContactFormTranslations

  /* ================================================================ */
  /*  Privacy Phone page                                               */
  /* ================================================================ */
  privacyPhone: {
    hero: {
      title: string
      tagline: string
      description: string
      ctaDownload: string
      ctaContact: string
    }

    pillars: {
      sectionLabel: string
      title: string
      items: {
        num: string
        title: string
        subtitle: string
        desc: string
      }[]
    }

    hardware: {
      sectionLabel: string
      title: string
      specs: {
        label: string
        value: string
      }[]
      whyTitle: string
      whyPoints: string[]
    }

    os: {
      sectionLabel: string
      title: string
      description: string
      features: {
        title: string
        description: string
      }[]
      privacyByDesignTitle: string
      privacyByDesignItems: string[]
      zeroGoogleTitle: string
      zeroGoogleDescription: string
    }

    connect: {
      sectionLabel: string
      title: string
      description: string
      transportTitle: string
      transportChannels: {
        label: string
        value: string
      }[]
      secureRelayTitle: string
      secureRelayDescription: string
      cryptoStackTitle: string
      cryptoStack: {
        name: string
        role: string
      }[]
      identityTitle: string
      identityDescription: string
      featuresTitle: string
      features: string[]
    }

    integration: {
      sectionLabel: string
      title: string
      tableHeaders: {
        from: string
        to: string
        synergy: string
      }
      rows: {
        from: string
        to: string
        synergy: string
      }[]
    }

    download: {
      sectionLabel: string
      title: string
      items: {
        title: string
        description: string
      }[]
    }

    proof: {
      sectionLabel: string
      title: string
      intro: string
      testCard: {
        operator: string
        operatorValue: string
        software: string
        softwareValue: string
        date: string
        dateValue: string
        duration: string
        durationValue: string
        device: string
        deviceValue: string
      }
      timeline: {
        time: string
        caption: string
        image: string
        alt: string
      }[]
      conclusionLabel: string
      conclusionText: string
      disclaimer: string
    }

    pricing: {
      sectionLabel: string
      title: string
      subtitle: string
      bundle: {
        label: string
        price: string
        period: string
        items: string[]
      }
      renewal: {
        label: string
        price: string
        period: string
        items: string[]
      }
      note: string
      cta: string
    }

    cta: {
      title: string
      description: string
      button: string
    }
  }

  /* ================================================================ */
  /*  Framework page                                                   */
  /* ================================================================ */
  framework: {
    hero: {
      sectionLabel: string
      title: string
      tagline: string
      description: string
      ctaDownload: string
      ctaContact: string
    }

    problem: {
      sectionLabel: string
      title: string
      description: string
      threats: {
        type: string
        detail: string
      }[]
      tableHeaders: {
        threat: string
        detail: string
      }
    }

    layers: {
      sectionLabel: string
      title: string
      layerA: {
        label: string
        name: string
        subtitle: string
        details: string[]
      }
      layerB: {
        label: string
        name: string
        subtitle: string
        details: string[]
      }
      layerC: {
        label: string
        name: string
        subtitle: string
        details: string[]
      }
    }

    stats: {
      items: {
        value: string
        unit: string
        label: string
      }[]
    }

    comparison: {
      sectionLabel: string
      title: string
      headers: string[]
      rows: {
        label: string
      }[]
      note: string
    }

    threats: {
      sectionLabel: string
      title: string
      cards: {
        year: string
        name: string
        location: string
        description: string
      }[]
    }

    nis2: {
      sectionLabel: string
      title: string
      badgeTitle: string
      badgeSubtitle: string
      tableHeaders: {
        requirement: string
        coverage: string
      }
      rows: {
        article: string
        mapping: string
      }[]
    }

    roadmap: {
      sectionLabel: string
      title: string
      items: {
        label: string
        status: string
      }[]
      statusImplemented: string
      statusInProgress: string
    }

    poc: {
      sectionLabel: string
      title: string
      description: string
      phases: {
        phase: string
        title: string
        description: string
      }[]
    }

    download: {
      sectionLabel: string
      title: string
      items: {
        title: string
        description: string
      }[]
    }

    cta: {
      title: string
      description: string
      button: string
    }
  }

  /* ================================================================ */
  /*  AegidaConnect page                                               */
  /* ================================================================ */
  aegidaConnect: {
    hero: {
      badge: string
      title: string
      tagline: string
      description: string
      ctaDownload: string
      ctaLearnMore: string
    }

    features: {
      sectionLabel: string
      title: string
      items: {
        title: string
        description: string
      }[]
    }

    security: {
      sectionLabel: string
      title: string
      description: string
      items: {
        label: string
        value: string
      }[]
    }

    comparison: {
      sectionLabel: string
      title: string
      description: string
      headers: string[]
      rows: {
        feature: string
        connect: string
        privacyPhone: string
      }[]
      note: string
    }

    download: {
      sectionLabel: string
      title: string
      description: string
      linuxLabel: string
      linuxDescription: string
      comingSoon: string
    }

    cta: {
      title: string
      description: string
      button: string
    }
  }

  /* ================================================================ */
  /*  Conformita / Quiz page                                           */
  /* ================================================================ */
  conformita: {
    meta: {
      title: string
      description: string
    }

    hero: {
      label: string
      title: string
      titleHighlight: string
      description: string
      noteLabel: string
      noteText: string
    }

    frameworks: {
      title: string
      titleHighlight: string
      description: string
      items: {
        title: string
        subtitle: string
        text: string
      }[]
    }
  }

  quiz: {
    intro: {
      questionLabel: string
      ofLabel: string
    }

    areas: string[]

    questions: {
      area: string
      question: string
      options: {
        text: string
      }[]
    }[]

    navigation: {
      back: string
      next: string
      seeResults: string
    }

    results: {
      title: string
      scoreLabel: string
      analysisTitle: string
      classificationType: string
      recommendationsTitle: string
      recommendedSolution: string
      ctaTitle: string
      ctaDescription: string
      ctaButton: string
      downloadReport: string
      restart: string
      downloadToast: string
      pdfTitle: string
      pdfSubtitle: string
      pdfDate: string
      pdfClassification: string
      pdfOverallScore: string
      pdfAreaBreakdown: string
      pdfRecommendations: string
      pdfDisclaimer: string
      pdfGenerated: string
    }

    levels: {
      advanced: string
      advancedDesc: string
      intermediate: string
      intermediateDesc: string
      insufficient: string
      insufficientDesc: string
      critical: string
      criticalDesc: string
    }

    areaLevels: {
      green: string
      yellow: string
      red: string
    }

    recommendations: {
      text: string
      product: string
    }[]

    classificationQuestion: {
      area: string
      question: string
      options: string[]
    }
  }

  /* ================================================================ */
  /*  Privacy Policy page                                              */
  /* ================================================================ */
  privacyPolicy: {
    meta: {
      title: string
      description: string
    }
    hero: {
      label: string
      title: string
    }
    lastUpdated: string
    sections: {
      title: string
      content: string[]
    }[]
  }

  /* ================================================================ */
  /*  Cookie Policy page                                               */
  /* ================================================================ */
  cookiePolicy: {
    meta: {
      title: string
      description: string
    }
    hero: {
      label: string
      title: string
    }
    lastUpdated: string
    sections: {
      title: string
      content: string[]
    }[]
  }

  /* ================================================================ */
  /*  Cookie consent banner                                            */
  /* ================================================================ */
  cookie: {
    message: string
    acceptAll: string
    necessaryOnly: string
    customize: string
    save: string
    necessary: string
    necessaryDesc: string
    analytics: string
    analyticsDesc: string
    marketing: string
    marketingDesc: string
    privacyLink: string
  }
}

/* ------------------------------------------------------------------ */
/*  Contact Form sub-type                                              */
/* ------------------------------------------------------------------ */

export interface ContactFormTranslations {
  nameLabel: string
  namePlaceholder: string
  organizationLabel: string
  organizationPlaceholder: string
  emailLabel: string
  emailPlaceholder: string
  roleLabel: string
  rolePlaceholder: string
  productLabel: string
  productPlaceholder: string
  productOptions: string[]
  sectorLabel: string
  sectorPlaceholder: string
  sectorOptions: string[]
  messageLabel: string
  messagePlaceholder: string
  submitButton: string
  sending: string
  successTitle: string
  successMessage: string
  errorDefault: string
}
