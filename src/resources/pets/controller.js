const { prisma } = require("../../utils/database")

const getAll = async (req, res) => {
    prisma.pet
    .findMany()
    .then((result) => res.json ({ data: result}))
    .catch((error) => {
        console.error({ error })
        res.status(500).json ({ error: error.message})
    })
    }
    const getOneById = async (req, res) => {
        console.log({params: typeof req.params.id})
    
    const result = await prisma.pet.findUnique({
        where: {
            id: parseInt(req.params.id)
        },
    });
    res.json ({ data: result})
    .catch((error) => {
        console.error({ error})
        res.status(500).json ({ error: error.message})
    })
    };
    
    module.exports = {
        getAll,
        getOneById
    }