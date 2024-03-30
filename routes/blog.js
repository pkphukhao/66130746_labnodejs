const express = require("express");
const router = express.Router();
const blogs = [
  {
    id: 1,
    title: "นายอน (Nayeon) ชาวเกาหลี",
    description: "อิม นายอน  (Im Nayeon) ",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/9376de90-0940-11eb-b35d-299eb29d6529_original.jpg",
  },
  {
    id: 2,
    title: "จองยอน (Jeongyeon) ชาวเกาหลี",
    description: "ยู จองยอน (Yoo Jeong-yeon)",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/921b4630-0940-11eb-b35d-299eb29d6529_original.jpg",
  },
  {
    id: 3,
    title: "โมโมะ (Momo) ชาวญี่ปุ่น",
    description: "ฮิราอิ โมโมะ (Hirai Momo)",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/92fd1ab0-0940-11eb-8d0b-db22203d57e6_original.jpg",
  },
  {
    id: 4,
    title: "ซานะ (Sana) ชาวญี่ปุ่น",
    description: "มินาโตซากิ ซานะ (Minatozaki Sana)",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/939cdd20-0940-11eb-8d0b-db22203d57e6_original.jpg",
  },
  {
    id: 5,
    title: "จีฮโย (Jihyo) ชาวเกาหลี",
    description: "พัค จีฮโย (Park Ji hyo)",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/928133f0-0940-11eb-a3b0-f9d575a2517d_original.jpg",
  },
  {
    id: 6,
    title: "มินะ (Mina) ชาวญี่ปุ่น",
    description: "เมียวอิ มินะ (Myoui Mina)",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/92aa66d0-0940-11eb-8c17-5bb542a40882_original.jpg",
  },
  {
    id: 7,
    title: "ดาฮยอน (Dahyun) ชาวเกาหลี",
    description: "คิม ดาฮยอน (Kim Dahyun)",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/91fe4850-0940-11eb-b35d-299eb29d6529_original.jpg",
  },
  {
    id: 8,
    title: "แชยอง (Chaeyoung) ชาวเกาหลี",
    description: "ซน แชยอง (Son Chae Young)",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/91891850-0940-11eb-a3b0-f9d575a2517d_original.jpg",
  },
  {
    id: 9,
    title: "จื่อวี (Tzuyu) ชาวไต้หวัน",
    description: "โจว จื่อวี่ (Chou Tzu Yu)",
    cover:
      "https://cms.dmpcdn.com/musicarticle/2020/10/08/93f00630-0940-11eb-a3b0-f9d575a2517d_original.jpg",
  },
  {
    id: 10,
    title: "ชินจัง",
    description: "ชิน จัง (Shin-chan)",
    cover:
      "https://image.posttoday.com/media/content/2016/06/26/644D3DA733584FD38F852941B153A902.jpg",
  },
];

/**
 * @swagger
 * /blog:
 *   get:
 *     tags: [Blog]
 *     description: Get all books
 *     responses:
 *       200:
 *         description: Success
 *
 */
router.get("/blog", (req, res) => {
  res.json(blogs);
});

/**
 * @swagger
 * /blog/{id}:
 *   get:
 *     tags: [Blog]
 *     summary: Get a blog by ID.
 *     description: Retrieve a blog by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the blog to retrieve.
 *     responses:
 *       200:
 *         description: A single blog object.
 *       404:
 *         description: blog not found.
 */
router.get("/blog/:id", (req, res) => {
  const { id } = req.params;
  const result = blogs.find((rs) => rs.id === parseInt(id));
  console.log(id);
  res.json(result);
});

module.exports = router;
