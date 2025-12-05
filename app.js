const library = [
	{
        title: 'A Brief History of Time',
        icon: '🌌',
        parts: [
            {
                tag: 'Part 1',
                title: 'The Quest for Knowledge',
                subtitle: 'How We Picture Our Universe',
                cards: [
                    {
                        eyebrow: 'THE TOWER OF TURTLES',
                        title: 'Turtles All The Way Down?',
                        body: 'Hawking starts with a famous story: A scientist explains the earth orbits the sun. An old woman objects, claiming the world is a flat plate on the back of a giant turtle. When asked what the turtle stands on, she triumphs: "It’s turtles all the way down!" It sounds silly, but Hawking challenges us: Why do we think we know better?',
                        prompt: "THE OPENING ANECDOTE",
                        image: 'images/brief_history/1_1.png',
                        details: '<p>...</p>'
                    },
                    {
                        eyebrow: 'THE MENTAL MODEL',
                        title: 'It’s Just a Model',
                        body: 'Here is the hard truth: A theory exists only in our minds. It’s a model we build to explain what we see. It’s never 100% "true" because you can’t check every instance in the universe. Seeing the sun rise a million times suggests a pattern, but it only takes one day of the sun not rising to prove the theory wrong.',
                        prompt: "THE SCIENTIFIC METHOD",
                        image: 'images/brief_history/1_2.png',
                        details: '<p>...</p>'
                    },
                    {
                        eyebrow: 'THE GREAT SCHISM',
                        title: 'A Tale of Two Universes',
                        body: 'Right now, physics is split in two. We have General Relativity to explain the heavy stuff (gravity, stars, the universe). We have Quantum Mechanics to explain the tiny stuff (atoms, particles). They both work perfectly on their own turf, but they are incompatible. They speak completely different languages.',
                        prompt: "THE CURRENT CRISIS",
                        image: 'images/brief_history/1_3.png',
                        details: '<p>...</p>'
                    },
                    {
                        eyebrow: 'THE HOLY GRAIL',
                        title: 'The Theory of Everything',
                        body: 'The goal of this book—and the holy grail of modern physics—is to heal this split. Hawking is searching for a Grand Unified Theory that merges gravity and quantum mechanics. If we find this single equation, we won\'t just predict the movement of stars; we will understand the fundamental "why" of existence, or as Hawking puts it, "the mind of God."',
                        prompt: "THE ULTIMATE GOAL",
                        image: 'images/brief_history/1_4.png',
                        details: '<p>...</p>'
                    }
                ]
            },
            {
                tag: 'Part 2',
                title: 'Bending Reality',
                subtitle: 'The Nature of Space and Time',
                cards: [
                    {
                        eyebrow: 'THE PARADIGM SHIFT',
                        title: 'The Stage Is Alive',
                        body: 'To understand the modern universe, you have to unlearn your common sense. Isaac Newton thought space was just an empty, rigid container where things happened, and time was a universal clock that ticked the same for everyone. Einstein blew that up. He realized space and time aren\'t separate; they are woven together into a flexible, four-dimensional fabric called "space-time."',
                        prompt: "THE OLD VS. THE NEW",
                        image: 'images/brief_history/2_1.png',
                        details: '<p>...</p>'
                    },
                    {
                        eyebrow: 'THE COSMIC TRAMPOLINE',
                        title: 'It’s Not a Pull, It’s a Bend',
                        body: 'General Relativity changed everything by defining gravity as curvature. Forget gravity as an invisible magnet pulling things. Imagine the universe as a giant trampoline. Put a heavy bowling ball (like the Sun) in the middle, and the mat curves down. A marble (like Earth) rolls toward the ball not because it\'s being pulled, but simply because it’s following the curve of the mat.',
                        prompt: "VISUALIZING GRAVITY",
                        image: 'images/brief_history/2_2.png',
                        details: '<p>...</p>'
                    },
                    {
                        eyebrow: 'WARPED TIME',
                        title: 'Where Gravity Slows the Clock',
                        body: 'Since space and time are woven together, if you bend space with gravity, you warp time too. The heavier the object, the stronger the gravity, and the slower time moves nearby. A clock placed near a massive pyramid (stronger gravity) actually ticks slower than a clock floating way out in deep space.',
                        prompt: "MIND-BENDING PHYSICS",
                        image: 'images/brief_history/2_3.png',
                        details: '<p>...</p>'
                    }
                ]
            }
        ]
    },
    {
        title: 'Sapiens',
        icon: '📚',
        parts: [
            {
                tag: 'Part 0',
                title: 'The Core Thesis',
                subtitle: 'Why Humans Rule the World',
                cards: [
                    {
                        eyebrow: 'WE RULE NOT BECAUSE OF STRENGTH, BUT COOPERATION.',
                        title: 'Sapiens vs. The Rest',
                        body: 'The central argument of Sapiens is that Homo sapiens came to dominate the world because it is the only animal that can cooperate flexibly in large numbers.',
                        prompt: 'SAPIENS VS. THE REST',
                        image: 'images/1_1.png',
                        details: `
                            <p>The central argument of Sapiens is that Homo sapiens conquered the world because we are the only species capable of cooperating both flexibly and in very large numbers.</p>
                            <p>Harari explains that this unique ability is not due to our individual strength or intelligence, but because of our capacity to create and believe in shared myths, also known as "imagined orders" or "intersubjective realities."</p>
                        `
                    },
                    {
                        eyebrow: 'RIGID COOPERATION',
                        title: 'The Ant Trap',
                        body: "Social insects like ants and bees cooperate in the millions, but their cooperation is rigid and genetically programmed. They can't reinvent their social structure overnight.",
                        prompt: 'ANTS VS. SAPIENS',
                        image: 'images/1_2.png',
                        details: `
                            <p>Ants and bees are incredible examples of social organization. They build massive colonies, manage complex food supply chains, and wage war. However, their entire system is based on a rigid genetic code. An ant cannot change its role in the colony, question the queen's authority, or invent a new way of doing things.</p>
                            <p>This rigidity is also their greatest weakness. If the environment changes in a way their genes didn't anticipate, the entire colony can collapse. They lack the ability to adapt and innovate that defines human cooperation.</p>
                        `
                    },
                    {
                        eyebrow: 'FLEXIBLE BUT SMALL-SCALE COOPERATION',
                        title: 'The Limit of Animals',
                        body: "Social mammals like wolves or chimpanzees cooperate with much more flexibility, but only in small numbers. Their cooperation depends on intimate, personal knowledge of each other.",
                        prompt: 'THE GHOST IN THE MACHINE',
                        image: 'images/1_3.png',
                        details: `
                            <p>Other social mammals like wolves or chimpanzees cooperate with much more flexibility, but only in small numbers. Their cooperation depends on intimate, personal knowledge of each other. A chimp troop's size is limited by the leader's ability to personally know and manage every member.</p>
                            <p>...</p>
                        `
                    },
                    {
                        eyebrow: 'SAPIENS SECRET WEAPON - THE SHARED MYTH',
                        title: 'Unifying Strangers Through An Invented Story',
                        body: "Sapiens overcame these limits by inventing stories and getting millions of strangers to believe in them. These are things that do not have an objective, physical existence but are real because we collectively agree they are real.",
                        prompt: 'THE GREAT LEAP FORWARD',
                        image: 'images/1_4.png',
                        details: `
                            <p>Sapiens overcame these limits by inventing stories and getting millions of strangers to believe in them. These are things that do not have an objective, physical existence but are real because we collectively agree they are real.</p>
                            <p>...</p>
                        `
                    },
                    {
                        eyebrow: 'EXAMPLES OF MYTHS - MONEY',
                        title: 'Money Is Just Paper, But Belief Gives It Value',
                        body: 'A euro note is just a piece of paper. It has value only because billions of strangers believe in the story of its value.',
                        prompt: 'PAPER IS EVERYTHING',
                        image: 'images/1_5.png',
                        details: `
                            <p>A dollar bill or a euro coin is just a piece of paper or metal. It has value only because billions of strangers believe in the story of its value.</p>
                        `
                    },
                    {
                        eyebrow: 'EXAMPLES OF MYTHS - NATIONS AND CORPERATIONS',
                        title: 'Abstract Entities That Exist Only In Our Collective Imagination',
                        body: 'France is not a natural, physical entity. It is an "imagined community" built on shared stories, symbols (like the flag), and laws that millions of people believe in, allowing them to cooperate without ever meeting. A company like Peugeot is a legal fiction. It can own property and sign contracts, but you cannot physically touch it. It exists only on paper and in our collective imagination.',
                        prompt: 'IMAGINED ORDERS',
                        image: 'images/1_6.png',
                        details: `
                            <p>France is not a natural, physical entity. It is an "imagined community" built on shared stories, symbols (like the flag), and laws that millions of people believe in, allowing them to cooperate without ever meeting. A company like Peugeot is a legal fiction. It can own property and sign contracts, but you cannot physically touch it. It exists only on paper and in our collective imagination.</p>
                        `
                    },
                    {
                        eyebrow: 'EXAMPLES OF MYTHS - HUMAN RIGHTS',
                        title: 'Contrasting Biological Reality With Invented Moral Stories.',
                        body: 'The idea that all humans are born with inalienable rights is not a biological or physical fact. It is a powerful story we invented and chose to believe in, forming the basis of modern legal and ethical systems.',
                        prompt: 'POWER OF NOT KNOWING',
                        image: 'images/1_7.png',
                        details: `
                            <p>The idea that all humans are born with inalienable rights is not a biological or physical fact. It is a powerful story we invented and chose to believe in, forming the basis of modern legal and ethical systems.</p>
                        `
                    },
                    {
                        eyebrow: 'THE RESULT',
                        title: 'Unprecedented Power and Rapid Change',
                        body: 'This ability to unite millions of strangers around a common story (a religion, a nation, a corporate goal, a legal code) gives us unprecedented power. We can build cities, create trade networks, and wage wars on a scale no other animal can comprehend. And because these stories are invented, we can change them relatively quickly—allowing for rapid cultural and social evolution, from monarchies to democracies, without needing any genetic evolution.',
                        prompt: 'BECOMING GODS?',
                        image: 'images/1_8.png',
                        details: `
                            <p>This ability to unite millions of strangers around a common story (a religion, a nation, a corporate goal, a legal code) gives us unprecedented power. We can build cities, create trade networks, and wage wars on a scale no other animal can comprehend. And because these stories are invented, we can change them relatively quickly—allowing for rapid cultural and social evolution, from monarchies to democracies, without needing any genetic evolution.</p>
                        `
                    }
                ]
            },
            {
                tag: 'Part 1',
                title: 'The Cognitive Revolution',
                subtitle: 'The event that unlocked the unique potential of Sapiens',
                cards: [
                    {
                        eyebrow: 'THE SPARK',
                        title: 'The Before And After',
                        body: 'This revolution marks the point where Homo sapiens began its ascent to world domination. It occurred roughly between 70,000 and 30,000 years ago and was characterized by a fundamental change in our cognitive abilities, most importantly, in our language. Harari argues that the Cognitive Revolution gave Sapiens a new and radically different type of language. It wasnt just about pointing and saying "Lion!"',
                        prompt: 'FROM MARGINAL TO DOMINANT',
                        image: 'images/2_1.png',
                        details: `
                            <p>This revolution marks the point where Homo sapiens began its ascent to world domination. It occurred roughly between 70,000 and 30,000 years ago and was characterized by a fundamental change in our cognitive abilities, most importantly, in our language. Harari argues that the Cognitive Revolution gave Sapiens a new and radically different type of language. It wasnt just about pointing and saying "Lion!"</p>
                            <p>...</p>
                        `
                    },
                    {
                        eyebrow: 'LANGUAGE FEATURE 1',
                        title: 'Detailed World-Building',
                        body: "The language became incredibly descriptive and nuanced. It allowed Sapiens to share vast amounts of information about their surroundings. Not just, \"Look out, a lion!\" but, \"This morning, by the bend in the river, I saw a lion stalking a herd of bison.\" This enabled complex planning, such as coordinating large-scale hunts and creating sophisticated survival strategies.",
                        prompt: 'SIMPLE COMMNUNICATION VS COMPLEX PLANNING',
                        image: 'images/2_2.png',
                        details: `
                            <p>The language became incredibly descriptive and nuanced. It allowed Sapiens to share vast amounts of information about their surroundings. Not just, "Look out, a lion!" but, "This morning, by the bend in the river, I saw a lion stalking a herd of bison." This enabled complex planning, such as coordinating large-scale hunts and creating sophisticated survival strategies.</p>
                            <p>...p>
                        `
                    },
                    {
                        eyebrow: 'LANGUAGE FEATURE 2',
                        title: 'The Gossip Theory',
                        body: "The language became a tool for talking about other people. Sapiens could discuss the intricate web of social relationships within their group: Who is trustworthy? Who is a cheat? Who is the leader? Who is sleeping with whom? This \"gossip\" allowed for the formation of larger and more stable bands. This tight-knit social cohesion was a massive advantage.",
                        prompt: 'SOCIAL BONDING THROUGH TALKING ABOUT OTHERS',
                        image: 'images/2_3.png',
                        details: `
                            <p>The language became a tool for talking about other people. Sapiens could discuss the intricate web of social relationships within their group: Who is trustworthy? Who is a cheat? Who is the leader? Who is sleeping with whom? This "gossip" allowed for the formation of larger and more stable bands, likely up to about 150 individuals (a concept known as Dunbar's number). This tight-knit social cohesion was a massive advantage.</p>
                            <p>...</p>
                        `
                    },
                    {
                        eyebrow: 'LANGUAGE FEATURE 3',
                        title: 'Fictive Language - The Game Changer',
                        body: " This is the critical link to the Core Thesis. The new language gave Sapiens the ability to speak about things that do not exist at all—legends, myths, gods, and spirits. It allowed us to create and share fictions.",
                        prompt: 'SPEAKING ABOUT THINGS THAT DO NOT EXIST',
                        image: 'images/2_4.png',
                        details: `
                            <p> This is the critical link to the Core Thesis we just defined. The new language gave Sapiens the ability to speak about things that do not exist at all—legends, myths, gods, and spirits. It allowed us to create and share fictions.</p>
                            <p>...</p>
                        `
                    },
                    {
                        eyebrow: 'CONSEQUENCE OF FICTIVE LANGUAGE',
                        title: 'The Birth of Art and Religion',
                        body: 'With fictive language, Sapiens could rapidly change their social structures, norms, and behaviors without any genetic change. They could invent new stories and new rules, leading to the birth of diverse cultures. Thus we saw the emergence of the first undisputed signs of culture, such as the Stadel Lion Man statue, Venus figurines, and elaborate cave paintings and burial rituals, all suggesting a mind capable of abstract and mythical thought.',
                        prompt: 'VISUAL EVIDENCE OF ABSTRACT',
                        image: 'images/2_5.png',
                        details: `
                            <p>With fictive language, Sapiens could rapidly change their social structures, norms, and behaviors without any genetic change. They could invent new stories and new rules, leading to the birth of diverse cultures. This period sees the emergence of the first undisputed signs of culture, such as the Stadel Lion Man statue, Venus figurines, and elaborate cave paintings and burial rituals, all suggesting a mind capable of abstract and mythical thought.</p>
                        `
                    },
                    {
                        eyebrow: 'OUTCOMPETING NEANDERTHALS',
                        title: 'Strong but few (Neanderthals) vs many and coordinated (Sapiens)',
                        body: 'The ability to create shared myths (e.g., "The Great Lion Spirit is our ancestor and will protect us if we cooperate") allowed Sapiens to unite behind common beliefs, enabling cooperation between hundreds or even thousands of strangers for the first time. This new cognitive toolkit gave Sapiens a decisive advantage over other human species like the Neanderthals. While Neanderthals were likely just as strong and intelligent individually, they couldn\'t cooperate in large, flexible numbers. Sapiens could form a band of 150 to overwhelm a Neanderthal group of 30. This likely led to the extinction of all other human species.',
                        prompt: 'THE NUMBERS ADVANTAGE',
                        image: 'images/2_6.png',
                        details: `
                            <p>The ability to create shared myths (e.g., "The Great Lion Spirit is our ancestor and will protect us if we cooperate") allowed Sapiens to unite behind common beliefs, enabling cooperation between hundreds or even thousands of strangers for the first time. This new cognitive toolkit gave Sapiens a decisive advantage over other human species like the Neanderthals. While Neanderthals were likely just as strong and intelligent individually, they couldn't cooperate in large, flexible numbers. Sapiens could form a band of 150 to overwhelm a Neanderthal group of 30. This likely led to the extinction of all other human species.</p>
                        `
                    },
                    {
                        eyebrow: 'GLOBAL COLONIZATION',
                        title: 'From Africa To The World',
                        body: 'Powered by this new ability to cooperate and adapt, Sapiens spread out from East Africa and, in a remarkably short time, colonized the entire planet, from Australia to the Americas, driving countless large animal species to extinction along the way.',
                        prompt: 'RAPID EXPANSION ACROSS THE PLANET',
                        image: 'images/2_7.png',
                        details: `
                            <p>Powered by this new ability to cooperate and adapt, Sapiens spread out from East Africa and, in a remarkably short time, colonized the entire planet, from Australia to the Americas, driving countless large animal species to extinction along the way.</p>
                        `
                    },
                    {
                        eyebrow: 'THE SOFTWARE UPDATE',
                        title: 'The Brain Upgrade That Allowed Everything Else To Happen',
                        body: 'In essence, the Cognitive Revolution was the "software update" for the Sapiens brain that allowed our unique brand of large-scale, flexible cooperation to flourish. This revolution laid the neural and linguistic groundwork for everything that followed. The next major turning point, the one that fundamentally reshaped human society and the planet: The Agricultural Revolution, an event Harari controversially calls "history\'s biggest fraud!',
                        prompt: 'SUMMARIZING THE REVOLUTION',
                        image: 'images/2_8.png',
                        details: `
                            <p>In essence, the Cognitive Revolution was the "software update" for the Sapiens brain that allowed our unique brand of large-scale, flexible cooperation to flourish. This revolution laid the neural and linguistic groundwork for everything that followed. The next major turning point, the one that fundamentally reshaped human society and the planet: The Agricultural Revolution, an event Harari controversially calls "history's biggest fraud</p>
                        `
                    }
                ]
            }
        ]
    },
    {
        title: 'The Selfish Gene',
        icon: '🧬',
        parts: [
            {
                tag: 'Part 0',
                title: 'The Replicators',
                subtitle: 'Genes as the Unit of Selection',
                cards: [
                    {
                        eyebrow: 'THE BIG IDEA',
                        title: 'Genes, not Species',
                        body: 'We usually think evolution is about the survival of the fittest animal or the strongest species. But Dawkins flips the script. He argues the real main character of history isn\'t the lion or the human—it is the gene. The gene is the only unit that actually survives and persists through millions of years, while our bodies are just temporary blips on the timeline.',
                        prompt: "THE GENE'S EYE VIEW",
                        image: 'images/selfish_gene/1_1.png',
                        details: '<p>...</p>'
                    },
                    {
                        eyebrow: 'REPLICATORS VS VEHICLES',
                        title: 'We Are Survival Machines',
                        body: 'Dawkins asks us to distinguish between the "Replicators" (the genes) and the "Vehicles" (us). Genes are the immortal blueprints that want to copy themselves forever. To do this, they build complex "survival machines" to protect them from the outside world. You, me, and every animal are just temporary robots built by our genes to carry them safely into the next generation.',
                        prompt: "THE METAPHOR",
                        image: 'images/selfish_gene/1_2.png',
                        details: '<p>...</p>'
                    },
					{
                        eyebrow: 'THE PARADOX OF ALTRUISM',
                        title: 'The Calculated Sacrifice',
                        body: 'If genes are selfish, why would a mother deer risk her life to save her fawn? It looks like kindness, but it is actually a cold calculation. Because the baby carries 50% of the mother\'s genes, saving the baby is a strategic move to ensure those genes survive. The mother acts "altruistically" only because her genes are acting "selfishly" to protect copies of themselves.',
                        prompt: "KIN SELECTION",
                        image: 'images/selfish_gene/1_3.png',
                        details: '<p>...</p>'
                    }
					
                ]
            },
			{
                tag: 'Part 1',
                title: 'Kin Selection',
                subtitle: 'Selfish Altruism',
                cards: [
                    {
                        eyebrow: 'KIN SELECTION',
                        title: 'Why We Help Family',
                        body: 'Why do wolves hunt together and birds feed their siblings? It’s called Kin Selection. Since relatives share a portion of your DNA, helping them survive is actually a way of helping your own genes survive. It explains why family bonds are so strong in nature: it’s the genes protecting their own copies residing in someone else’s body.',
                        prompt: "FAMILY TIES",
                        image: 'images/selfish_gene/2_1.png',
                        details: '<p>...</p>'
                    },
                    {
                        eyebrow: 'THE BATTLE OF SEXES',
                        title: 'The Cost Of Creation',
                        body: 'In the game of evolution, males and females often play by different rules. Why? Cost. A female egg is large, complex, and "expensive" to make, while male sperm is tiny and "cheap" to produce in millions. This imbalance means females usually have to be choosy (looking for quality), while males are often competitive (looking for quantity).',
                        prompt: "EVOLUTIONARY CONFLICT",
                        image: 'images/selfish_gene/2_2.png',
                        details: '<p>...</p>'
                    },
					{
                        eyebrow: 'THE MEME',
                        title: 'Ideas Are Alive - Memes',
                        body: 'Dawkins asks: Is DNA the only thing that replicates? No! He introduces the Meme: an idea, a tune, or a fashion trend. Just like genes leap from body to body, memes leap from brain to brain through imitation. If a song is catchy, it spreads. This is the bridge to human culture—the "imagined orders" we learned about in Sapiens are actually giant webs of memes!',
                        prompt: "THE NEW REPLICATOR",
                        image: 'images/selfish_gene/2_3.png',
                        details: '<p>...</p>'
                    },
					{
                        eyebrow: 'MEMES BUILT OUR WORLD',
                        title: 'The Bridge To Sapiens',
                        body: 'Remember the "Imagined Orders" from Sapiens? Things like money, nations, and laws that only exist because we all believe in them? Dawkins gives us the biological name for them: Memeplexes. Just as genes team up to build a body, memes team up to build a culture. Our entire society is built on these invisible, replicating ideas!',
                        prompt: "THE BIG CONNECTION",
                        image: 'images/selfish_gene/2_4.png',
                        details: '<p>...</p>'
                    }
					
                ]
            }
        ]
    },
	{
        title: 'The Brain',
        icon: '🧠',
        parts: [
            {
                tag: 'Part 0',
                title: 'Reality is a Construction',
                subtitle: 'Your Brain is a Storyteller',
                cards: [
                    {
                        eyebrow: 'THE LOCKED VAULT',
                        title: 'Locked In The Dark',
                        body: 'Here is the spooky truth: Your brain has never seen the sun or felt the wind. It sits in a pitch-black, silent vault of bone (your skull). It has zero direct contact with the outside world. It relies entirely on electric impulses sent down wires by your eyes and ears, trying to guess what is happening outside.',
                        prompt: "THE SITUATION",
                        image: 'images/brain/1_1.png',
                        details: '<p>...</p>'
                    },
                    {
                        eyebrow: 'THE REALITY STUDIO',
                        title: 'The World Builder',
                        body: 'You aren\'t a video camera recording the world; you are a director creating a movie. Your brain takes sketchy, low-quality data from your senses and aggressively edits it. It fills in gaps, stabilizes shaky footage, and applies filters. What you experience as "reality" is actually a high-definition simulation broadcast inside your head.',
                        prompt: "THE MERCHANISM",
                        image: 'images/brain/1_2.png',
                        details: '<p>...</p>'
                    },
					{
                        eyebrow: 'THE GREAT TRANSLATOR',
                        title: 'The Invention Of Color',
                        body: 'Color doesn\'t exist outside your head. Out there, it’s just electromagnetic radiation of different sizes. Your brain acts as a translator, turning boring data (wavelengths) into a dazzling user interface (red, blue, green) so you can tell a ripe fruit from a poisonous one. You don\'t see the physics; you see the "icons."',
                        prompt: "THE USER INTERFACE",
                        image: 'images/brain/1_3.png',
                        details: '<p>...</p>'
                    },
					{
                        eyebrow: 'THE TIME LAG',
                        title: 'Living In The Past',
                        body: 'Light hits your eyes faster than sound hits your ears. It takes time for signals to travel up your nerves. To prevent your life from looking like a badly dubbed Kung Fu movie, your brain waits for all signals to arrive before showing you the scene. This means your "now" is actually a split-second delay.',
                        prompt: "MIND-BENDING TRUTH",
                        image: 'images/brain/1_4.png',
                        details: '<p>...</p>'
                    }
					
                ]
            },
			{
                tag: 'Part 1',
                title: 'Key Principles of Brain Function',
                subtitle: 'How the Individual Brain Works',
                cards: [
                    {
                        eyebrow: 'THE SHAPESHIFTER',
                        title: 'Your Brain is Not Hardware',
                        body: 'Most machines, like your laptop, have fixed hardware. Your brain is different. It is "livewired." It is constantly unplugging and re-plugging its own circuits based on what you do. If you learn the streets of London, your memory centers physically grow. You aren\'t just storing information; you are physically sculpting the structure of your brain.',
                        prompt: "PLASTICITY",
                        image: 'images/brain/2_1.png',
                        details: '<p>...</p>'
                    },
                    {
                        eyebrow: 'THE UNIVERSAL PLUG',
                        title: 'Seeing With Your Skin',
                        body: 'Your brain doesn\'t "know" what eyes are. It just knows how to process electrical signals. This means you can swap the inputs. If you feed video data into the brain through vibrations on the skin, the visual cortex will eventually learn to decode it. Your brain is a universal machine: give it data, and it will figure out how to "see" it.',
                        prompt: "ADAPTABILITY",
                        image: 'images/brain/2_2.png',
                        details: '<p>...</p>'
                    },
					{
                        eyebrow: 'THE STOWAWAY',
                        title: 'You Are Not the Captain',
                        body: 'You think you are the Captain of the S.S. You, steering the ship. Actually, you\'re a stowaway on a massive ocean liner. The engines, navigation, and repairs are all run by a crew you never see (your unconscious). You only get notified when something goes wrong or a major decision is needed. Most of "you" is running on autopilot.',
                        prompt: "THE UNCONSCIOUS",
                        image: 'images/brain/2_3.png',
                        details: '<p>...</p>'
                    },
					{
                        eyebrow: 'THE ZOMBIE PLOT',
                        title: 'Burning It Into the Circuit',
                        body: 'Remember how hard driving was at first? That was your conscious mind struggling. Now, you can drive home without thinking. Why? Because you "burned" the skill into your unconscious circuitry. Your conscious mind handed the keys to your inner "zombie pilot"—a fast, efficient, automatic system that drives while you daydream.',
                        prompt: "AUTOMATION",
                        image: 'images/brain/2_4.png',
                        details: '<p>...</p>'
                    },
					{
                        eyebrow: 'THE CIVIL WAR',
                        title: 'The Parliament of Mind',
                        body: 'There is no single "You." Your brain is a parliament of rival political parties. One party (the Limbic System) wants cake now. The other party (the Frontal Cortex) wants to be healthy later. Every decision you make—like putting down the fork—is just the winner of a violent, silent civil war inside your skull.',
                        prompt: "INTERNAL CONFLICT",
                        image: 'images/brain/2_5.png',
                        details: '<p>...</p>'
                    },
					{
                        eyebrow: 'HACKING YOUR FUTURE',
                        title: 'Don\'t Trust Your Future Self',
                        body: 'Since your brain switches between "Rational You" and "Impulsive You," you can\'t trust your future self. The solution? A Ulysses Contract. You lock the junk food away today so the "Impulsive You" of tomorrow can\'t get it. You are essentially outsmarting a different person who lives in your body.',
                        prompt: "STRATEGY",
                        image: 'images/brain/2_6.png',
                        details: '<p>...</p>'
                    }
					
                ]
            }
        ]
    },
	{
        title: 'Thinking, Fast and Slow',
        icon: '💭',
        parts: [
            {
                tag: 'Part 0',
                title: 'The Two Operators',
                subtitle: 'Meet the duo running the show inside your head.',
                cards: [
                    {
                        eyebrow: 'THE DUAL PROCESSOR',
                        title: 'Meet The Odd Couple',
                        body: 'You think of yourself as one single person, but Kahneman argues your brain is actually a partnership between two very different characters. One is fast, emotional, and impulsive (System 1). The other is slow, logical, and incredibly lazy (System 2). To understand why you do what you do, you have to meet the team.',
                        prompt: "THE CAST",
                        image: 'images/thinking_fast/1_1.png',
                        details: '<p>...</p>'
                    },
                    {
                        eyebrow: 'SYSTEM 1',
                        title: 'Fast, Furious, and Always On',
                        body: 'This is your gut reaction. It operates automatically and involuntarily. It’s the part of you that instantly answers "4" when you see "2+2" or snaps your head toward a loud noise. It requires zero effort and feels like it happens to you, rather than you doing it. It never sleeps.',
                        prompt: "THE AUTOPILOT",
                        image: 'images/thinking_fast/1_2.png',
                        details: '<p>...</p>'
                    },
                    {
                        eyebrow: 'SYSTEM 2',
                        title: 'The Lazy Controller',
                        body: 'This is the "you" that you identify with—the conscious voice in your head. It handles complex stuff like "17 x 24" or parking in a tight spot. But here’s the catch: it takes massive effort. Focusing attention burns energy, so this system is naturally lazy. It only wakes up when it absolutely has to.',
                        prompt: "THE ENGINEER",
                        image: 'images/thinking_fast/1_3.png',
                        details: '<p>...</p>'
                    },
                    {
                        eyebrow: 'THE INTERACTION',
                        title: 'Rubber-Stamping Reality',
                        body: 'Here is the crucial dynamic: System 1 is constantly generating suggestions, feelings, and intuitions. System 2 should check them, but because it’s lazy, it usually just accepts them without looking. System 1 provides the impression; System 2 turns it into a belief. Most of the time, the lazy boss just rubber-stamps the intern\'s work.',
                        prompt: "THE DYNAMIC",
                        image: 'images/thinking_fast/1_4.png',
                        details: '<p>...</p>'
                    },
                    {
                        eyebrow: 'THE PUNCHLINE',
                        title: 'Who’s Really Driving?',
                        body: 'We like to think System 2 is the pilot of our lives. In reality, System 2 is often a passenger, and System 1 is steering the car. This efficient division of labor usually works, but it leaves us vulnerable. Because the pilot is impulsive and the co-pilot is asleep, we are prone to predictable errors and biases.',
                        prompt: "THE TRUTH",
                        image: 'images/thinking_fast/1_5.png',
                        details: '<p>...</p>'
                    }
                ]
            },
			{
                tag: 'Part 1',
                title: 'The Glitches in the Matrix',
                subtitle: 'Why your brain takes shortcuts and how they lead you astray.',
                cards: [
                    {
                        eyebrow: 'THE AVAILABILITY HEURISTIC',
                        title: 'If It Bleeds, It Leads',
                        body: 'We judge how likely something is by how easily we can remember examples. Shark attacks? Terrifying, vivid, and all over the news. Falling airplane parts? Boring and hard to picture. Result: We fear the shark, even though falling debris is statistically deadlier. System 1 prefers a good horror movie over boring statistics.',
                        prompt: "THE SHORTCUT",
                        image: 'images/thinking_fast/2_1.png',
                        details: '<p>...</p>'
                    },
                    {
                        eyebrow: 'THE REPRESENTATIVENESS HEURISTIC',
                        title: 'The Linda Problem',
                        body: 'Meet Linda: bright, outspoken, philosophy major. Is she a bank teller? Or a feminist bank teller? Most people say "feminist bank teller" because it fits her description. But logic says there are way more bank tellers than feminist ones. You just fell for a good story and ignored the math (base rates).',
                        prompt: "THE STEREOTYPE",
                        image: 'images/thinking_fast/2_2.png',
                        details: '<p>...</p>'
                    },
                    {
                        eyebrow: 'THE ANCHORING EFFECT',
                        title: 'Dragged Down by Randomness',
                        body: 'Your brain grabs the first number it sees—the "anchor"—and struggles to move away from it. In Kahneman’s study, a random wheel spin influenced how people guessed stats about the UN. Even when the number is totally random, it pulls your judgment toward it like a magnet, skewing your final answer.',
                        prompt: "THE ANCHOR",
                        image: 'images/thinking_fast/2_3.png',
                        details: '<p>...</p>'
                    },
                    {
                        eyebrow: 'LOSS AVERSION & THE ENDOWMENT EFFECT',
                        title: 'The "Mine!" Instinct',
                        body: 'Losing $10 feels twice as bad as finding $10 feels good. This leads to the "Endowment Effect": we value things way more just because we own them. In the "Mug Experiment," owners wanted $7 to sell, but buyers would only pay $3. Simply holding the mug made it feel more valuable.',
                        prompt: "THE IMBALANCE",
                        image: 'images/thinking_fast/2_4.png',
                        details: '<p>...</p>'
                    },
                    {
                        eyebrow: 'THE FRAMING EFFECT',
                        title: 'It’s All About Presentation',
                        body: '"90% survival rate" sounds great. "10% mortality rate" sounds terrifying. They are the exact same statistic! But your System 1 reacts emotionally to the words "survival" (good!) and "mortality" (bad!), causing you to make totally different decisions based entirely on how the info is framed.',
                        prompt: "THE FRAME",
                        image: 'images/thinking_fast/2_5.png',
                        details: '<p>...</p>'
                    },
                    {
                        eyebrow: 'WYSIATI (THE MASTER CONCEPT)',
                        title: 'What You See Is All There Is',
                        body: 'This is the root of all biases. System 1 creates a coherent story based only on the info right in front of it. It doesn\'t ask, "What am I missing?" It assumes the limited view through the keyhole is the whole world. It jumps to conclusions because it ignores the unknown.',
                        prompt: "THE MASTER KEY",
                        image: 'images/thinking_fast/2_6.png',
                        details: '<p>...</p>'
                    }
                ]
            }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const appContainer = document.getElementById('app-container');
    const sidebarContainer = document.getElementById('sidebar');

    if (!appContainer || !sidebarContainer) {
        console.error("Fatal Error: Could not find app containers. The app will not run.");
        return;
    }

    appContainer.classList.add('active');

    // App State
    let state = {
        currentChapterIndex: 0,
        currentPartIndex: 0,
        currentCardIndex: null, // null for Part view, index for Detail view
    };

    // --- RENDER FUNCTIONS ---

    function renderSidebar() {
        const currentChapter = library[state.currentChapterIndex];
        
        const sidebarHTML = `
            <header class="sidebar-header">
                <div class="icon">🧠</div>
                <div>
                    <h1 class="title">Know Thyself</h1>
                    <p class="subtitle">Big ideas for young minds</p>
                </div>
            </header>
            <nav>
                <ul class="sidebar-nav">
                    ${library.map((chap, index) => {
                        const isChapterActive = index === state.currentChapterIndex;
                        let subNavHTML = '';
                        if (isChapterActive && chap.parts) {
                            subNavHTML = '<ul class="nav-sub-list">';
                            chap.parts.forEach((part, partIndex) => {
                                const isPartActive = partIndex === state.currentPartIndex;
                                subNavHTML += `
                                    <li class="nav-sub-item ${isPartActive ? 'active' : ''}">
                                        <a href="#" data-part-index="${partIndex}">${part.title}</a>
                                    </li>
                                `;
                            });
                            subNavHTML += '</ul>';
                        }
                        return `
                            <li class="nav-item ${isChapterActive ? 'active' : 'inactive'}">
                                <a href="#" data-chapter-index="${index}">
                                    <span class="icon">${chap.icon}</span> ${chap.title}
                                </a>
                                ${subNavHTML}
                            </li>
                        `;
                    }).join('')}
                </ul>
            </nav>
            <footer class="sidebar-footer">
                <div class="tip-box">
                    <span class="icon">💡</span>
                    <p><strong>Tip:</strong> Click a card to explore any concept further.</p>
                </div>
            </footer>
        `;
        sidebarContainer.innerHTML = sidebarHTML;
        addSidebarListeners();
    }

    function renderPartView() {
        const part = library[state.currentChapterIndex].parts[state.currentPartIndex];
        const cardsHTML = part.cards.map((card, index) => `
            <article class="feature-card" data-card-index="${index}">
                <div class="card-visual">
                    <img src="${card.image}" alt="${card.title}">
                    <div class="gradient-overlay">${card.prompt}</div>
                </div>
                <div class="card-content">
                    <p class="eyebrow">${card.eyebrow}</p>
                    <h2 class="title">${card.title}</h2>
                    <p class="body-text">${card.body}</p>
                    <footer class="card-footer">
                        <span>${index + 1} / ${part.cards.length}</span>
                        <a href="#" class="see-details" data-card-index="${index}">
                            <span class="icon">💬</span> See Details
                        </a>
                    </footer>
                </div>
            </article>
        `).join('');

        appContainer.innerHTML = `
            <header class="page-header">
                <span class="tag">${part.tag}</span>
                <h1 class="title">${part.title}</h1>
                <p class="subtitle">${part.subtitle}</p>
            </header>
            <div id="card-container">${cardsHTML}</div>
        `;
        addPartViewListeners();
    }

    function renderDetailView() {
        const card = library[state.currentChapterIndex].parts[state.currentPartIndex].cards[state.currentCardIndex];
        const part = library[state.currentChapterIndex].parts[state.currentPartIndex];
        const totalCards = part.cards.length;

        const isFirstCard = state.currentCardIndex === 0;
        const isLastCard = state.currentCardIndex === totalCards - 1;

        appContainer.innerHTML = `
            <div class="detail-view">
                <header class="detail-view-header">
                    <a href="#" class="back-button">
                        <span class="icon">‹</span> Back to ${part.title}
                    </a>
                    <h1 class="detail-title">${card.title}</h1>
                </header>
                <img src="${card.image}" alt="${card.title}" class="detail-image">
                <div class="detail-content">
                    ${card.details}
                </div>
                <nav class="detail-view-nav">
                    <a href="#" class="prev-button ${isFirstCard ? 'disabled' : ''}">‹ Previous Idea</a>
                    <a href="#" class="next-button ${isLastCard ? 'disabled' : ''}">Next Idea ›</a>
                </nav>
            </div>
        `;
        addDetailViewListeners();
    }

    // --- EVENT LISTENERS ---

    function addSidebarListeners() {
        sidebarContainer.querySelectorAll('[data-chapter-index]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                const newChapterIndex = parseInt(e.currentTarget.dataset.chapterIndex);
                if (state.currentChapterIndex !== newChapterIndex) {
                    state.currentChapterIndex = newChapterIndex;
                    state.currentPartIndex = 0;
                    state.currentCardIndex = null;
                    updateView();
                }
            });
        });
        sidebarContainer.querySelectorAll('[data-part-index]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                state.currentPartIndex = parseInt(e.currentTarget.dataset.partIndex);
                state.currentCardIndex = null;
                updateView();
            });
        });
    }

    function addPartViewListeners() {
        appContainer.querySelectorAll('[data-card-index]').forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); // Prevent event from bubbling up to parent elements
                state.currentCardIndex = parseInt(e.currentTarget.dataset.cardIndex);
                updateView();
            });
        });
    }

    function addDetailViewListeners() {
        appContainer.querySelector('.back-button').addEventListener('click', (e) => {
            e.preventDefault();
            state.currentCardIndex = null;
            updateView();
        });
        const prevButton = appContainer.querySelector('.prev-button');
        if (prevButton && !prevButton.classList.contains('disabled')) {
            prevButton.addEventListener('click', (e) => {
                e.preventDefault();
                if (state.currentCardIndex > 0) {
                    state.currentCardIndex--;
                    updateView();
                }
            });
        }
        const nextButton = appContainer.querySelector('.next-button');
        if (nextButton && !nextButton.classList.contains('disabled')) {
            nextButton.addEventListener('click', (e) => {
                e.preventDefault();
                const totalCards = library[state.currentChapterIndex].parts[state.currentPartIndex].cards.length;
                if (state.currentCardIndex < totalCards - 1) {
                    state.currentCardIndex++;
                    updateView();
                }
            });
        }
    }

    // --- APP INITIALIZATION ---

    function updateView() {
        renderSidebar();
        if (state.currentCardIndex === null) {
            renderPartView();
        } else {
            renderDetailView();
        }
        window.scrollTo(0, 0);
    }

    function init() {
        updateView();
    }

    init();
});
