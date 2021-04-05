exports.privateData = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: {
      product: {
        name: "Bag",
        price: "$33",
        description: "Nice bag",
      },
    },
  });
};
