const notes = () => {
  // Variables
  const addBtn = document.querySelector(".button");
  const container = document.querySelector(".content");
  const notes = JSON.parse(localStorage.getItem("notes"));

  // Functions
  const updateNote = () => {
    const notesText = document.querySelectorAll("textarea");
    const notes = [];
    notesText.forEach((note) => notes.push(note.value));
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("card");
    note.innerHTML = `
    <div class="card-header">
        <button class="btn-edit">
            <i class="fal fa-edit"></i>
        </button>
        <button class="btn-delete">
            <i class="fal fa-trash"></i>
        </button>
    </div>

    <div class="card-body">
        <p class="text ${text ? "" : "hidden"}"></p>
        <textarea class="${text ? "hidden" : ""}"></textarea>
    </div>
    `;

    const editBtn = note.querySelector(".btn-edit");
    const deleteBtn = note.querySelector(".btn-delete");
    const noteText = note.querySelector("p.text");
    const textarea = note.querySelector("textarea");

    textarea.value = text;
    noteText.innerHTML = text;

    // Events
    deleteBtn.addEventListener("click", () => {
      note.remove();
      updateNote();
    });

    editBtn.addEventListener("click", () => {
      noteText.classList.toggle("hidden");
      textarea.classList.toggle("hidden");
      editBtn.classList.toggle("show-text");
    });

    textarea.addEventListener("input", (e) => {
      const { value } = e.target;
      noteText.innerHTML = value;
      updateNote();
    });

    container.appendChild(note);
  };

  // Events
  addBtn.addEventListener("click", () => addNote());
  if (notes) {
    notes.forEach((note) => addNote(note));
  }
};

notes();
