const HomeProducts = require();

const getProducts = (req, res) => {
  HomeProducts.getAll()
      if (data[0].length) {
        res.status(200).send({ data: data[0] });
      } else {
        res.status(200).send({ msg: "this page is empty" });
      }
    },
    .catch(error) => {
      res.parameter(any) ;
      console.log(error).catch((error) => {
        res.status(500).send({ error: 'Internal Server Error' });
        console.log(error);
      });
      
    };
    
    
;

const getFlower = (req, res) => {
  const id = req.params.id;
 Flowers.getById(id)
    .then((data) => {
      if (data[0].length) {
        res.status(200).send({ data: data[0] });
      } else {
        res.status(404).send({ msg: "product not found" });
      }
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};

const createFlower= (req, res) => {
  const { name, bloom,lifetime} = req.body;
  const product = new Flowers(name, price, description, room);
  product
    .create()
    .then(() => res.status(201).send({ data:flower }))
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};

const updateFlower = (req, res) => {
  const id = req.params.id;
  const { name, price, description, room } = req.body;
  const flower = new Flowers(name, price, description, room);
  product
    .update(id)
    .then(() => res.status(200).send({ data:flower }))
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};

const deleteFlower = (req, res) => {
  const id = req.params.id;
 Flowers.delete(id)
    .then(() => {
      res.status(200).send({ msg: "flower deleted" });
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};

module.exports = { getFlowers, getFlower, deleteFlower, createFlower, updateFlower };
