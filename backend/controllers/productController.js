export const getProducts = async (req, res) => {
  try {
    return res.send("Hello World From Router!!");
  } catch (error) {
    res.send({ message: error });
  }
};
