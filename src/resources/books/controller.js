const {prisma} = require("../../utils/database")

const createOne = async (req, res) => {
    const { title, type, author, topic, publicationDate } = req.body
try {
    const book = await prisma.book.create ({
        data: {
            title, 
            type, 
            author, 
            topic, 
            publicationDate
        },
        
    })
    res.json({ data: book})
} catch (error) {
  console.error({error})  

  res.status(500).json({ error: error.message})
}

}

const getAll = async (req, res) => {
    try {
       const book = await prisma.book.findMany()
       res.json({ data: book})
} catch (error) {
  console.error({error})  

  res.status(500).json({ error: error.message})
}

}

const getOneById = async (req, res) => {
    console.log({params: typeof req.params.id})
try {
const result = await prisma.book.findUnique({
    where: {
        id: parseInt(req.params.id)
    },
});
res.json ({ data: result})
} catch (error) {
    console.error({error})  
  
    res.status(500).json({ error: error.message})
  }
};


module.exports = {
    createOne,
    getAll,
    getOneById,
}