const { where } = require('sequelize');
const PDV = require('../models/Pdv.js');
const User = require("../models/Users.js")
// Create
async function createPDV(req, res) {
  try {
    const { pdvname, location } = req.body;
    const pdv = await PDV.create({ pdvname, location });
    res.status(200).json(pdv);
  } catch (error) {
    console.error('Error creating PDV:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Read all
async function getAllPDVs(req, res) {
  try {
    const pdvs = await PDV.findAll();
    res.status(200).json(pdvs);
  } catch (error) {
    console.error('Error getting PDVs:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
 
async  function getOnePDV(req, res){
  try{
    const name=req.body
    const result=await PDV.findOne({where:{pdvname:name}})
    res.json(result)
  }
  catch (error) {
    console.error('Error getting PDVs:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Read one
async function getPDVById(req, res) {
  try {
    const { id } = req.params;
    const pdv = await PDV.findByPk(id);
    if (!pdv) {
      return res.status(404).json({ message: 'PDV not found' });
    }
    res.status(200).json(pdv);
  } catch (error) {
    console.error('Error getting PDV by id:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Update
async function updatePDV(req, res) {
  try {
    const { id } = req.params;
    const { pdvname, location } = req.body;
    const pdv = await PDV.findByPk(id);
    if (!pdv) {
      return res.status(404).json({ message: 'PDV not found' });
    }
    await pdv.update({ pdvname, location });
    res.status(200).json(pdv);
  } catch (error) {
    console.error('Error updating PDV:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

// Delete
async function deletePDV(req, res) {
  try {
    const { id } = req.params;
    const pdv = await PDV.findByPk(id);
    if (!pdv) {
      return res.status(404).json({ message: 'PDV not found' });
    }
    await pdv.destroy();
    res.status(204).end();
  } catch (error) {
    console.error('Error deleting PDV:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const getnamepdv = async (req, res) => {
    const name = req.body.name;

    try {
        const pdv = await PDV.findAll({
            include: [{
                model: User,
                where: { name: name }
            }]
        });

        if (pdv.length === 0) {
            res.status(404).json({ message: 'No PDV found for the given user name' });
            return;
        }

        // Supposons que vous voulez récupérer le nom du premier PDV trouvé
        const namepdv = pdv.pdvname;
        res.json({ namepdv });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
async function getPDVIdByName(req, res) {
  const pdvname = req.params.pdvname || req.body.pdvname;

  if (!pdvname) {
    return res.status(400).send({ error: 'pdvname parameter is required' });
  }

  try {
    console.log('pdvname:', pdvname); // Debugging statement

    const pdv = await PDV.findOne({
      where: { pdvname: pdvname }
    });

    if (!pdv) {
      return res.status(404).send({ error: 'PDV not found' });
    }

    return res.status(200).send(pdv);
  } catch (error) {
    console.error('Database query failed:', error);
    return res.status(500).send({ error: 'Internal server error' });
  }
}

module.exports = {
  createPDV,
  getAllPDVs,
  getPDVById,
  updatePDV,
  deletePDV,
  getnamepdv,
  getOnePDV,
  getPDVIdByName
};
