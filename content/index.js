// Assembles the Know Thyself library from the per-book content files.
// Each content/<book>.js defines one global; this file puts them in display order.
// Loaded by index.html AFTER the individual book files and BEFORE app.js.

const library = [
    bookBriefHistory,
    bookSapiens,
    bookSelfishGene,
    bookBrain,
    bookThinkingFast,
    bookZebras,
    bookBehave,
];
