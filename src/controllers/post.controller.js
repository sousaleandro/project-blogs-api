const { postService, categoriesService } = require('../services');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const { id } = req.user;
    
    const categoriesExist = await Promise.all(
      categoryIds.map(async (categoryId) => {
        const category = await categoriesService.getById(categoryId);
        return category;
      }),
    );

    if (categoriesExist.includes(null)) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }

    const post = await postService.create(title, content, id, categoryIds);

    return res.status(201).json(post);
  } catch (err) {
    return res.status(500).json({ message: 'Internal Error', error: err.message });
  }
};

module.exports = {
  create,
};
