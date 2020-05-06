const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//get all properties
app.get("/property", async (req, res) => {
  try {
    const allProperty = await pool.query("SELECT * FROM adbuy");
    res.json(allProperty.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get all properties
app.get("/propertyrent", async (req, res) => {
  try {
    const allProperty = await pool.query("SELECT * FROM adrent");
    res.json(allProperty.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get buy property with id
app.get("/property/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const property = await pool.query("SELECT * FROM adbuy WHERE id = $1", [
      id,
    ]);
    res.json(property.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get rent property by id
app.get("/propertyrent/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const property = await pool.query("SELECT * FROM adrent WHERE id = $1", [
      id,
    ]);
    res.json(property.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get buy properties with mulitple params

app.get(
  "/properties/:minprice/:maxprice/:city/:propertytype/:bedroom",
  async (req, res) => {
    try {
      const { minprice, maxprice, city, propertytype, bedroom } = req.params;
      const property = await pool.query(
        "SELECT * FROM adbuy WHERE price BETWEEN $1 AND $2 AND city = $3 AND propertytype = $4 AND bedroom = $5",
        [minprice, maxprice, city, propertytype, bedroom]
      );
      res.json(property.rows);
    } catch (err) {
      console.error(err.message);
    }
  }
);

//get rent properties with mulitple params

app.get(
  "/propertiesrent/:minprice/:maxprice/:city/:propertytype/:bedroom",
  async (req, res) => {
    try {
      const { minprice, maxprice, city, propertytype, bedroom } = req.params;
      const property = await pool.query(
        "SELECT * FROM adrent WHERE price BETWEEN $1 AND $2 AND city = $3 AND propertytype = $4 AND bedroom = $5",
        [minprice, maxprice, city, propertytype, bedroom]
      );
      res.json(property.rows);
    } catch (err) {
      console.error(err.message);
    }
  }
);

//post single property
app.post("/property", async (req, res) => {
  try {
    const {
      price,
      address,
      city,
      propertytype,
      postcode,
      description,
      bedroom,
      number,
      image,
    } = req.body;
    const newProperty = await pool.query(
      "INSERT INTO adbuy(price, address, city, propertytype, postcode, description, bedroom, number, image) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [
        price,
        address,
        city,
        propertytype,
        postcode,
        description,
        bedroom,
        number,
        image,
      ]
    );
    console.log(newProperty.rows);

    res.json(newProperty.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.post("/propertyrent", async (req, res) => {
  try {
    const {
      price,
      address,
      city,
      propertytype,
      postcode,
      description,
      bedroom,
      number,
      bill,
      furnishing,
    } = req.body;
    const newProperty = await pool.query(
      "INSERT INTO adrent(price, address, city, propertytype, postcode, description, bedroom, number, bill, furnishing) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
      [
        price,
        address,
        city,
        propertytype,
        postcode,
        description,
        bedroom,
        number,
        bill,
        furnishing,
      ]
    );
    console.log(newProperty.rows);

    res.json(newProperty.rows);
  } catch (error) {
    console.error(error.message);
  }
});
//update a property

app.put("/property/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      price,
      address,
      city,
      propertytype,
      postcode,
      description,
      bedroom,
      number,
    } = req.body;
    const updateProperty = await pool.query(
      "UPDATE adbuy SET (price, address, city, propertytype, postcode, description, bedroom, number) = ($1, $2, $3, $4, $5, $6, $7, $8) WHERE id = $9",
      [
        price,
        address,
        city,
        propertytype,
        postcode,
        description,
        bedroom,
        number,
        id,
      ]
    );

    res.json("Property was updated!");
  } catch (err) {
    console.error(err.message);
  }
});

//delete property by id
app.delete("/property/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProperty = await pool.query("DELETE FROM adbuy WHERE id = $1", [
      id,
    ]);
    res.json("Property was deleted");
  } catch (err) {
    console.log(err.message);
  }
});

// //create a todo
// app.post("/todos", async (req, res) => {
//   try {
//     const { description } = req.body;
//     const newTodo = await pool.query(
//       "INSERT INTO todo (description) VALUES($1) RETURNING *",
//       [description]
//     );

//     res.json(newTodo.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// //get all todos

// app.get("/todos", async (req, res) => {
//   try {
//     const allTodos = await pool.query("SELECT * FROM todo");
//     res.json(allTodos.rows);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// //get a todo

// app.get("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
//       id,
//     ]);

//     res.json(todo.rows[0]);
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// //update a todo

// app.put("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { description } = req.body;
//     const updateTodo = await pool.query(
//       "UPDATE todo SET description = $1 WHERE todo_id = $2",
//       [description, id]
//     );

//     res.json("Todo was updated!");
//   } catch (err) {
//     console.error(err.message);
//   }
// });

// //delete a todo

// app.delete("/todos/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
//       id,
//     ]);
//     res.json("Todo was deleted!");
//   } catch (err) {
//     console.log(err.message);
//   }
// });

app.listen(5000, () => {
  console.log("server has started on port 5000");
});
