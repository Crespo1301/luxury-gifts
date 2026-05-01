export type Lang = "en" | "es";

export const dict = {
  en: {
    nav: {
      collection: "Collection",
      categories: "What we do",
      process: "Process",
      about: "About",
      contact: "Contact",
      orderWhatsApp: "Order on WhatsApp",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      langSwitch: "Español",
    },
    mockup: {
      tag: "Preview Mockup",
      message: "This is a CSolutions mockup, not a finished site.",
      cta: "Let's launch yours.",
      cell: "(000) 000-0000",
      callPrefix: "Call",
    },
    hero: {
      eyebrow: "Your Market · Studio Placeholder",
      titleA: "Hand-crafted florals",
      titleB: "made to be remembered.",
      body:
        "Luxury gift boxes, fresh and eternal roses, breakfast surprises, and event styling. Built one piece at a time for the people you love.",
      ctaPrimary: "Order on WhatsApp",
      ctaSecondary: "View the collection",
      cardLabel: "Signature",
      cardName: "Heart Box, Large",
      ratingStrong: "Loved by clients",
      ratingSub: "across your service area",
    },
    trust: [
      { stat: "500+", label: "Arrangements delivered" },
      { stat: "Local", label: "Service area placeholder" },
      { stat: "100%", label: "Hand-built to order" },
    ],
    marquee: [
      "Hand-tied florals",
      "Eternal preserved roses",
      "Curated gift boxes",
      "Breakfast surprises",
      "Event styling",
      "Same-day pickup option",
      "Delivery placeholder",
      "Personalized cards",
    ],
    categories: {
      eyebrow: "What we do",
      titleA: "Four ways we make a moment",
      titleB: "unforgettable.",
      madeToOrder: "Made to order",
      items: [
        { title: "Fresh Florals", blurb: "Hand-tied bouquets and signature heart boxes built around the day's freshest stems." },
        { title: "Gift Baskets", blurb: "Curated arrangements with chocolates, Baileys, Ferrero, and personalized cards." },
        { title: "Event Gifting", blurb: "Birthdays, anniversaries, proposals, graduations. Tailored to the moment." },
        { title: "Event Decor", blurb: "Floral installations and styled details that turn rooms into experiences." },
      ],
    },
    collection: {
      eyebrow: "The Collection",
      titleA: "Signature pieces,",
      titleB: "priced and ready.",
      body:
        "A curated selection from our current catalog. Every piece is built to order with the freshest stems and finest finishes. Custom requests are always welcome.",
      catalogCta: "View full catalog",
      handBuilt: "Hand-built to order",
      orderCta: "Order",
      footnote: "Designs may vary slightly based on flower availability. Shipping is additional.",
      categoryNames: {
        Roses: "Roses",
        "Eternal Roses": "Eternal Roses",
        "Gift Box": "Gift Box",
        Breakfast: "Breakfast",
        Basket: "Basket",
      },
      orderMessage: (name: string, price: number) =>
        `Hi, I'd love to order the ${name} ($${price}).`,
    },
    products: {
      "heart-box-large": {
        name: "Heart Box, Large",
        badge: "Signature",
        includes: ["Large natural roses", "Personalized ribbon", "Signature heart presentation"],
      },
      "heart-box-baileys": {
        name: "Heart Box with Baileys",
        includes: ["Medium natural roses", "Baileys mini bottle", "Hand-tied heart box"],
      },
      "hydrangeas-box": {
        name: "Hydrangeas Box",
        includes: ["Hydrangeas with roses", "Crown detail", "Personalized ribbon", "Love card"],
      },
      "box-in-love": {
        name: "Box In Love",
        includes: ["Roses", "Chocolate-dipped strawberries", "Ferrero Rocher", "Love card"],
      },
      "box-baileys": {
        name: "Box Baileys",
        includes: ["Roses", "Baileys mini bottle", "Chocolates", "Love card"],
      },
      "premium-breakfast": {
        name: "Premium Breakfast",
        badge: "Most Loved",
        includes: ["Abundant fresh flowers", "Gourmet breakfast spread", "Prosecco Rosé", "Elegant presentation"],
      },
      "roses-cylinder-breakfast": {
        name: "Roses Cylinder Breakfast",
        includes: ["Decorated wooden tray", "Slice of cake, wrap, croissant", "Yogurt and granola parfait", "Floral arrangement"],
      },
      "eternal-i-love-you": {
        name: "Eternal I Love You",
        includes: ["Preserved roses that last for years", "Curated chocolates", "Hand-written love card"],
      },
      "magnetic-gift-box": {
        name: "Magnetic Gift Box",
        includes: ["Cotton gift item", "Dried fruit selection", "Premium chocolates"],
      },
    },
    process: {
      eyebrow: "How it works",
      titleA: "From your message to her doorstep, in",
      titleB: "four steps.",
      body:
        "Most orders are confirmed the same day. We hand-build, dress, and deliver every piece ourselves so the moment lands exactly the way you imagined it.",
      cta: "Start your order",
      steps: [
        { step: "01", title: "Choose your favorites", body: "Browse the catalog and pick the arrangements that feel right for the moment." },
        { step: "02", title: "Share the details", body: "Send the recipient's name, address, and date. Or use this section for pickup instructions." },
        { step: "03", title: "Confirm with payment", body: "Pay through Cash App, Venmo, or Zelle. Your order is reserved the moment payment lands." },
        { step: "04", title: "Hand-delivered", body: "Use this step for delivery terms, setup details, or presentation notes." },
      ],
    },
    about: {
      eyebrow: "The studio",
      titleA: "A boutique studio with a single rule:",
      titleB: "a perfect detail.",
      body1:
        "This template is for a boutique floral and gifting studio. Replace this copy with the founder story, product style, and the market you actually serve.",
      body2:
        "We work with fresh stems, preserved roses, gourmet add-ons, and styled presentation that feels considered from the box to the ribbon. The result is something worth photographing before it's ever opened.",
      tags: [
        "Same-day pickup",
        "Delivery zone placeholder",
        "Custom requests",
        "Personalized cards",
        "Event installations",
        "Eternal roses",
      ],
      studioTag: "Studio",
      servingPrefix: "Serving",
      servingArea: "your service area",
      studioCity: "Your City, State",
    },
    catalog: {
      eyebrow: "Featured catalog",
      titleA: "Browse the complete",
      titleB: "signature collection.",
      body:
        "Thirteen pages of signature pieces, eternal roses, breakfast experiences, and curated boxes, with pricing and details for every option.",
      ctaPrimary: "Open the catalog",
      ctaSecondary: "Ask about availability",
    },
    contact: {
      eyebrow: "Place an order",
      titleA: "Send a message.",
      titleB: "We'll handle the rest.",
      body:
        "Orders are placed directly through WhatsApp or text. Tell us what you'd like, the recipient's name and address, and your delivery date. We confirm the moment payment lands.",
      whatsapp: "WhatsApp",
      sms: "Text",
      serviceTitle: "Service area",
      serviceBody:
        "Delivery and pickup details go here once the real business is approved.",
      paymentsTitle: "Payment options",
      accountHolder: "Account holder",
      reservedNote: "Orders are reserved upon payment.",
    },
    footer: {
      tagline: "A Perfect Detail",
      blurb:
        "A boutique floral and gifting studio template ready for local customization.",
      reach: "Reach us",
      payments: "Payments",
      callPrefix: "Call",
      siteBy: "Site by",
      studioPrefix: "Studio:",
    },
  },
  es: {
    nav: {
      collection: "Colección",
      categories: "Servicios",
      process: "Proceso",
      about: "Nosotros",
      contact: "Contacto",
      orderWhatsApp: "Ordena por WhatsApp",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      langSwitch: "English",
    },
    mockup: {
      tag: "Vista previa",
      message: "Este es un mockup de CSolutions, no es un sitio terminado.",
      cta: "Lancemos el tuyo.",
      cell: "(000) 000-0000",
      callPrefix: "Llama al",
    },
    hero: {
      eyebrow: "Tu mercado · Estudio de muestra",
      titleA: "Florales hechos a mano",
      titleB: "para ser recordados.",
      body:
        "Cajas de regalo de lujo, rosas frescas y eternas, desayunos sorpresa y decoración de eventos. Cada pieza, hecha a mano para las personas que amas.",
      ctaPrimary: "Ordena por WhatsApp",
      ctaSecondary: "Ver la colección",
      cardLabel: "Firma",
      cardName: "Caja Corazón, Grande",
      ratingStrong: "Amado por clientes",
      ratingSub: "en tu área de servicio",
    },
    trust: [
      { stat: "500+", label: "Arreglos entregados" },
      { stat: "Local", label: "Área de servicio de muestra" },
      { stat: "100%", label: "Hecho a mano por pedido" },
    ],
    marquee: [
      "Florales hechos a mano",
      "Rosas eternas preservadas",
      "Cajas de regalo curadas",
      "Desayunos sorpresa",
      "Decoración de eventos",
      "Recogida el mismo día disponible",
      "Entrega de muestra",
      "Tarjetas personalizadas",
    ],
    categories: {
      eyebrow: "Servicios",
      titleA: "Cuatro formas de hacer un momento",
      titleB: "inolvidable.",
      madeToOrder: "Hecho por pedido",
      items: [
        { title: "Florales Frescos", blurb: "Bouquets hechos a mano y nuestras cajas corazón con las flores más frescas del día." },
        { title: "Cajas de Regalo", blurb: "Arreglos curados con chocolates, Baileys, Ferrero y tarjetas personalizadas." },
        { title: "Regalos para Eventos", blurb: "Cumpleaños, aniversarios, propuestas, graduaciones. Hecho a la medida del momento." },
        { title: "Decoración de Eventos", blurb: "Instalaciones florales y detalles cuidados que transforman cualquier espacio." },
      ],
    },
    collection: {
      eyebrow: "La Colección",
      titleA: "Piezas firma,",
      titleB: "con precio y listas.",
      body:
        "Una selección curada de nuestro catálogo actual. Cada pieza se hace a pedido con las flores más frescas y los mejores acabados. Las solicitudes personalizadas siempre son bienvenidas.",
      catalogCta: "Ver catálogo completo",
      handBuilt: "Hecho a mano por pedido",
      orderCta: "Ordenar",
      footnote: "Los diseños pueden variar según la disponibilidad de flores. El envío es adicional.",
      categoryNames: {
        Roses: "Rosas",
        "Eternal Roses": "Rosas Eternas",
        "Gift Box": "Caja de Regalo",
        Breakfast: "Desayuno",
        Basket: "Canasta",
      },
      orderMessage: (name: string, price: number) =>
        `Hola, me encantaría ordenar el ${name} ($${price}).`,
    },
    products: {
      "heart-box-large": {
        name: "Caja Corazón, Grande",
        badge: "Firma",
        includes: ["Rosas naturales tamaño grande", "Listón personalizado", "Presentación corazón firma"],
      },
      "heart-box-baileys": {
        name: "Caja Corazón con Baileys",
        includes: ["Rosas naturales tamaño mediano", "Mini botella de Baileys", "Caja corazón hecha a mano"],
      },
      "hydrangeas-box": {
        name: "Caja de Hortensias",
        includes: ["Hortensias con rosas", "Detalle de corona", "Listón personalizado", "Tarjeta de amor"],
      },
      "box-in-love": {
        name: "Caja In Love",
        includes: ["Rosas", "Fresas con chocolate", "Ferrero Rocher", "Tarjeta de amor"],
      },
      "box-baileys": {
        name: "Caja Baileys",
        includes: ["Rosas", "Mini botella de Baileys", "Chocolates", "Tarjeta de amor"],
      },
      "premium-breakfast": {
        name: "Desayuno Premium",
        badge: "Más amado",
        includes: ["Abundantes flores frescas", "Desayuno gourmet completo", "Prosecco Rosé", "Presentación elegante"],
      },
      "roses-cylinder-breakfast": {
        name: "Desayuno Cilindro de Rosas",
        includes: ["Bandeja de madera decorada", "Trozo de pastel, wrap, croissant", "Parfait de yogur y granola", "Arreglo floral"],
      },
      "eternal-i-love-you": {
        name: "Caja Eterna I Love You",
        includes: ["Rosas preservadas que duran años", "Chocolates curados", "Tarjeta de amor escrita a mano"],
      },
      "magnetic-gift-box": {
        name: "Caja Magnética",
        includes: ["Detalle de algodón", "Selección de frutos secos", "Chocolates premium"],
      },
    },
    process: {
      eyebrow: "Cómo funciona",
      titleA: "De tu mensaje a su puerta, en",
      titleB: "cuatro pasos.",
      body:
        "La mayoría de los pedidos se confirman el mismo día. Hacemos, montamos y entregamos cada pieza nosotros mismos para que el momento sea exactamente como lo imaginaste.",
      cta: "Iniciar tu pedido",
      steps: [
        { step: "01", title: "Escoge tus favoritos", body: "Explora el catálogo y elige los arreglos perfectos para el momento." },
        { step: "02", title: "Comparte los detalles", body: "Envíanos el nombre, dirección y fecha de entrega. O usa este espacio para las instrucciones de recogida." },
        { step: "03", title: "Confirma con el pago", body: "Paga por Cash App, Venmo o Zelle. Tu pedido se reserva en el momento que llega el pago." },
        { step: "04", title: "Entregado a mano", body: "Usa este paso para términos de entrega, montaje o presentación." },
      ],
    },
    about: {
      eyebrow: "El estudio",
      titleA: "Un estudio boutique con una sola regla:",
      titleB: "un detalle perfecto.",
      body1:
        "Esta plantilla es para un estudio boutique de flores y regalos. Reemplaza este texto con la historia real de la fundadora, el estilo del producto y el mercado que atiendes.",
      body2:
        "Trabajamos con flores frescas, rosas preservadas, complementos gourmet y una presentación cuidada desde la caja hasta el listón. El resultado es algo digno de fotografiar antes de abrirlo.",
      tags: [
        "Recogida el mismo día",
        "Área de entrega de muestra",
        "Pedidos personalizados",
        "Tarjetas personalizadas",
        "Instalaciones para eventos",
        "Rosas eternas",
      ],
      studioTag: "Estudio",
      servingPrefix: "Atendemos",
      servingArea: "tu área de servicio",
      studioCity: "Your City, State",
    },
    catalog: {
      eyebrow: "Catálogo destacado",
      titleA: "Explora la colección completa de",
      titleB: "San Valentín.",
      body:
        "Trece páginas de piezas firma, rosas eternas, experiencias de desayuno y cajas curadas, con precios y detalles para cada opción.",
      ctaPrimary: "Abrir el catálogo",
      ctaSecondary: "Pregunta por disponibilidad",
    },
    contact: {
      eyebrow: "Haz tu pedido",
      titleA: "Envía un mensaje.",
      titleB: "Nosotros nos encargamos.",
      body:
        "Los pedidos se hacen directamente por WhatsApp o mensaje de texto. Cuéntanos qué te gusta, el nombre y la dirección del destinatario y la fecha de entrega. Confirmamos al recibir el pago.",
      whatsapp: "WhatsApp",
      sms: "Mensaje",
      serviceTitle: "Área de servicio",
      serviceBody:
        "Los detalles de entrega y recogida van aquí cuando el negocio real esté aprobado.",
      paymentsTitle: "Opciones de pago",
      accountHolder: "Titular de cuenta",
      reservedNote: "Los pedidos se reservan al recibir el pago.",
    },
    footer: {
      tagline: "Un Detalle Perfecto",
      blurb:
        "Plantilla boutique de flores y regalos lista para personalizar localmente.",
      reach: "Contáctanos",
      payments: "Pagos",
      callPrefix: "Llama al",
      siteBy: "Sitio por",
      studioPrefix: "Estudio:",
    },
  },
};

export type Dict = (typeof dict)["en"];
