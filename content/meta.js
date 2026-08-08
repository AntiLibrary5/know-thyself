// Site-level copy for Know Thyself: the home page, the per-book introductions,
// and the cross-book synthesis page. Kept separate from the card data so the
// book files stay purely about the ideas.

const siteMeta = {

    site: {
        title: 'Know Thyself',
        tagline: 'Big ideas for young minds',
        intro: `<p><strong>"Know thyself"</strong> was carved into the stone at the temple of Delphi more than two
            thousand years ago. It is the oldest piece of advice we have, and still the hardest to follow.</p>
            <p>This library takes seven of the best non-fiction books ever written and pulls out their biggest
            ideas — one idea per card, in plain language, with a picture. Each book answers the same question from
            a different direction: <em>what am I, and why do I do what I do?</em></p>
            <p>Start anywhere. Every part stands on its own.</p>`
    },

    // Keyed by the book's `title` field in content/<book>.js
    books: {
        'A Brief History of Time': {
            author: 'Stephen Hawking',
            year: 1988,
            thesis: `The universe is not a fixed stage but a bending, expanding, thirteen-billion-year-old thing with a
                beginning — and the deepest laws we have found so far run on probability, not certainty.`,
            whyItsHere: `Because self-knowledge needs a sense of scale. This book sets the stage everything else happens
                on: the matter you are made of, the time you get, and the honest admission that every explanation we
                hold is a model that could be overturned tomorrow. That habit of humility is the whole method.`
        },
        'Sapiens': {
            author: 'Yuval Noah Harari',
            year: 2011,
            thesis: `Humans took over the planet not because we are strong or clever individually, but because we can
                cooperate flexibly in huge numbers — and we can do that because we believe in shared stories that exist
                nowhere but in our collective imagination.`,
            whyItsHere: `Because most of what you take for granted — money, nations, laws, careers, weekends — is an
                inherited story rather than a fact of nature. Seeing which of your beliefs are load-bearing fictions is
                the first real act of self-knowledge.`
        },
        'The Selfish Gene': {
            author: 'Richard Dawkins',
            year: 1976,
            thesis: `Evolution is best understood from the gene's point of view, not the individual's or the species'.
                You are a survival machine built by genes to carry themselves forward — and that single shift in
                perspective explains cooperation, family, conflict, and even ideas.`,
            whyItsHere: `Because it supplies the "why" underneath everything else. If Sapiens is the story of the car
                and Thinking, Fast and Slow is the manual for the dashboard, The Selfish Gene is the blueprint for the
                engine. It tells you where your drives came from — and why you are the one species that can refuse them.`
        },
        'The Brain': {
            author: 'David Eagleman',
            year: 2015,
            thesis: `Your brain is locked in silence and darkness inside your skull, receiving nothing but electrical
                signals. Everything you call "reality" is a model it builds — a useful, constantly-updated, deeply
                personal simulation of a world it never touches directly.`,
            whyItsHere: `Because it makes the abstract physical. It is one thing to be told your judgment is biased; it
                is another to learn that colour, time, and the sense of being a single unified "you" are all
                constructions. This is the hardware the other six books run on.`
        },
        'Thinking, Fast and Slow': {
            author: 'Daniel Kahneman',
            year: 2011,
            thesis: `Your mind runs on two systems: a fast, automatic, always-on System 1 that generates almost all of
                your impressions, and a slow, effortful, fundamentally lazy System 2 that mostly rubber-stamps them.
                The predictable gaps between the two are where your errors live.`,
            whyItsHere: `Because it is the closest thing we have to a diagnostic manual for your own judgment. You
                cannot switch the biases off — but you can learn to recognise the situations that trigger them, which
                is the difference between being run by your mind and running it.`
        },
        "Why Zebras Don't Get Ulcers": {
            author: 'Robert Sapolsky',
            year: 1994,
            thesis: `The stress response is a brilliant emergency system for surviving three minutes of sprinting from a
                lion. Humans are the only animals that switch it on for months at a time over things that are purely
                imagined — and that mismatch is what makes us sick.`,
            whyItsHere: `Because it is the most immediately useful book in the library. It explains what is physically
                happening in your body during a bad week, why it damages you, and — crucially — which parts of the
                response you actually have leverage over.`
        },
        'Behave': {
            author: 'Robert Sapolsky',
            year: 2017,
            thesis: `To explain any human action, you cannot pick one cause. You have to run the clock backward: what
                happened one second before, one hour before, one year before, in childhood, in the womb, in the culture,
                and over millions of years of evolution. Every layer is the same story at a different resolution.`,
            whyItsHere: `Because it is the capstone. Behave is where the neuroscience, the evolution, the culture and the
                cognitive biases stop being separate subjects and become a single explanation. Read it last; it holds
                the other six together.`
        }
    },

    bigPicture: {
        intro: `<p>Seven books, one question. Read separately they are seven subjects. Read together they are a single
            argument about what a human being is — told at seven different zoom levels, from the Big Bang down to the
            thought you are having right now.</p>
            <p>Dawkins wrote the blueprint for the engine. Harari wrote the story of the car. Kahneman wrote the manual
            for the dashboard. Eagleman opened the hood. Sapolsky explained both what the engine does under load, and
            every force that determined how it was built.</p>`,

        // One distilled paragraph per book — the "memory stones" from the manuscript.
        stones: [
            {
                icon: '🌌',
                book: 'A Brief History of Time',
                stone: `The universe has a birthday, an expansion, and an arrow of time that only points one way. Space
                    and time are a single fabric that bends. At the smallest scale, certainty itself dissolves into
                    probability. Every theory we hold is a model, never a proof — and the greatest scientists are not
                    the most certain but the most willing to be shown wrong.`
            },
            {
                icon: '📚',
                book: 'Sapiens',
                stone: `Homo sapiens came to dominate the planet through a unique ability to cooperate flexibly in
                    massive numbers, based on collective belief in shared fictions, or "imagined orders." This was
                    unlocked by the Cognitive Revolution, reshaped by the Agricultural Revolution, and amplified by the
                    Scientific Revolution. For the individual, this reveals that our core beliefs are inherited stories
                    and our instincts are often mismatched with our modern world — which grants us the freedom to
                    question our own reality.`
            },
            {
                icon: '🧬',
                book: 'The Selfish Gene',
                stone: `Evolution acts on genes, not species. Bodies are temporary survival machines that genes build to
                    carry themselves into the next round. This explains altruism toward kin, conflict between the sexes,
                    and — through the meme — how ideas began replicating alongside DNA. "Selfish" describes the gene's
                    logic, not your character; we are the one species capable of rebelling against it.`
            },
            {
                icon: '🧠',
                book: 'The Brain',
                stone: `Your brain sits in silence and darkness, building reality from electrical signals. Colour,
                    time, and the sense of a unified self are constructions, not perceptions. The brain is not fixed
                    hardware but constantly rewiring circuitry, mostly unconscious, and better understood as a
                    parliament of competing networks than a single decider.`
            },
            {
                icon: '💭',
                book: 'Thinking, Fast and Slow',
                stone: `Human cognition is governed by two systems: an intuitive, fast, error-prone System 1, and an
                    analytical, slow, lazy System 2. Most judgments come from System 1's heuristics, which produce
                    predictable biases, and System 2 usually fails to correct them. Our judgment of our own lives is
                    further split between an Experiencing Self and a Remembering Self. Understanding this flawed
                    machinery fosters intellectual humility and better decisions.`
            },
            {
                icon: '🦓',
                book: "Why Zebras Don't Get Ulcers",
                stone: `The stress response evolved for short physical emergencies. Humans activate it chronically over
                    psychological threats, and the same hormones that save your life in three minutes corrode your
                    heart, metabolism, immune system and memory over three months. What reliably buffers the damage is
                    not the absence of stress but control, prediction, social connection, and an outlet.`
            },
            {
                icon: '🧪',
                book: 'Behave',
                stone: `There is never one cause for a behaviour. The same act is explained by neurons one second
                    before, by hormones hours before, by plasticity years before, by childhood, by the womb, by culture,
                    and by evolution — and these are not competing explanations but one explanation at different
                    resolutions. Understanding this dissolves simple blame without dissolving responsibility.`
            }
        ],

        questionsIntro: `<p>Here is the practical payoff. When you next want to understand a human moment — someone
            else's behaviour, or your own — you now have five questions to ask instead of one snap judgment. Each book
            answers a different one:</p>`,

        questions: [
            { q: 'What was the evolutionary pressure behind this drive?', book: 'The Selfish Gene', icon: '🧬' },
            { q: 'What cultural story is being enacted here?',            book: 'Sapiens',          icon: '📚' },
            { q: 'Which cognitive biases are running right now?',         book: 'Thinking, Fast and Slow', icon: '💭' },
            { q: "What is the brain's physical state and construction?",  book: 'The Brain',        icon: '🧠' },
            { q: 'Is the stress response involved?',                      book: "Why Zebras Don't Get Ulcers", icon: '🦓' }
        ],

        closing: `<p>Ask all five and simple judgments get much harder to make. That is the point. As Sapolsky puts it,
            the more you understand about why a person did something, the less satisfying it becomes to sort them into a
            bucket — and the more accurately you can see what would actually have to change.</p>
            <p>This is what "know thyself" turns out to mean in practice. Not a single answer, but the ability to hold
            seven lenses at once and choose which one to look through.</p>`
    }
};
