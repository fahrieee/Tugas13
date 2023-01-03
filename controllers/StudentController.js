// import Model Student
const Student = require("../models/Student");

class StudentController {
  // menambahkan keyword async
  async index(req, res) {
    // memanggil method static all dengan async await.
    const students = await Student.all();

    const data = {
      message: "Menampilkkan semua Data students",
      data: students,
    };

    res.json(data);
  }

  async store(req, res) {
    const student = await Student.create(req.body);

    const data = {
        message: "Menambahkan Data students",
        data: student,
      };
  
      res.json(data);
    }

  async update(req, res) {
    const { id } = req.params;

    const student = await Student.find(id);

    if (student) {
        const studentUpdate = await Student.update(id, req.body);

        const data = {
            message: "Mengedit data student",
            data: studentUpdate,
        };

       res.status(200).res.json(data);
    } else {
        const data = {
            message: "data tidak ada",
        };

        res.status(404).res.json(data);
    }
  }

  async destroy(req, res) {
    const { id } = req.params;

    const student = await Student.find(id);

    if (student) {
      await Student.delete(id);
      const data = {
        message: "Mengahapus data student",
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: "Student not found",
      };

      res.status(404).json(data);
    }
  }

  async show(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    if(student) {
      const data = {
        message: "Menampilkan detail Students",
        data: student,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: "Student not Found",
      };

      res.status(404).json(data);
    }
  }
}

// Membuat object StudentController
const object = new StudentController();

// Export object StudentController
module.exports = object;