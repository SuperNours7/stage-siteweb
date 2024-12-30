exports.accueil = (req, res) => {
  res.render("accueil", {
    title: "Accueil - Starlink Martinique",
    description: "Découvrez un Internet rapide grâce à Starlink.",
  });
};

exports.contact = (req, res) => {
  res.render("contact", {
    title: "Contactez-nous - Starlink Martinique",
    description: "Pour toute demande, contactez-nous via le formulaire.",
  });
};
