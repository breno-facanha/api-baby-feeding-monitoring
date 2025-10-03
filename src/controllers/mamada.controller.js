const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const createMamada = async (req, res) => {
  const { quantidade, observacao, dataHora } = req.body;

  try {
    const mamada = await prisma.mamada.create({
      data: {
        quantidade,
        observacao,
        dataHora: dataHora ? new Date(dataHora) : new Date(), // Use provided date or current date
      },
    });
    res.status(201).json(mamada);
    console.log('Mamada created:', mamada);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create mamada' });
    console.error('Error creating mamada:', error);
  }
}

const getMamadas = async (req, res) => {
  try {
    const mamadas = await prisma.mamada.findMany();
    res.status(200).json(mamadas);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve mamadas' });
    console.error('Error retrieving mamadas:', error);
  }
}




module.exports = {
  createMamada,
    getMamadas,
};