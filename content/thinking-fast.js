// Thinking, Fast and Slow — Daniel Kahneman
// Part of the Know Thyself library. Loaded by index.html before content/index.js.

const bookThinkingFast = {
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
                        details: `<p>You think of yourself as one single person, but Kahneman argues your brain is actually a partnership between two very different characters. One is fast, emotional, and impulsive (System 1). The other is slow, logical, and incredibly lazy (System 2). To understand why you do what you do, you have to meet the team.</p>
                        <p>Daniel Kahneman, a psychologist who won the Nobel Prize in Economics, spent decades studying how people actually think—and discovered we're far less rational than we believe. He describes the mind as being run by two characters: <strong>System 1</strong> (fast, automatic, emotional) and <strong>System 2</strong> (slow, deliberate, logical).</p>
                        <p>These aren't literal brain regions—they're a useful metaphor for two modes of thinking. The tension between them explains nearly every cognitive bias, irrational decision, and mental shortcut you've ever experienced. Understanding this "odd couple" is the key to understanding yourself.</p>`
                    },
                    {
                        eyebrow: 'SYSTEM 1',
                        title: 'Fast, Furious, and Always On',
                        body: 'This is your gut reaction. It operates automatically and involuntarily. It’s the part of you that instantly answers "4" when you see "2+2" or snaps your head toward a loud noise. It requires zero effort and feels like it happens to you, rather than you doing it. It never sleeps.',
                        prompt: "THE AUTOPILOT",
                        image: 'images/thinking_fast/1_2.png',
                        details: `<p>This is your gut reaction. It operates automatically and involuntarily. It’s the part of you that instantly answers "4" when you see "2+2" or snaps your head toward a loud noise. It requires zero effort and feels like it happens to you, rather than you doing it. It never sleeps.</p>
                        <p>System 1 is the brain's autopilot. It's the reason you can read this sentence without consciously decoding each letter, dodge a ball thrown at your face, or instantly sense when someone is angry. It handles the vast majority of your mental life—pattern recognition, emotional reactions, learned skills.</p>
                        <p>Its speed comes from shortcuts called <strong>heuristics</strong>—mental rules of thumb that give fast, "good enough" answers. These shortcuts are usually right, but when they're wrong, they fail in predictable, systematic ways. These predictable failures are what Kahneman calls <strong>cognitive biases</strong>.</p>`
                    },
                    {
                        eyebrow: 'SYSTEM 2',
                        title: 'The Lazy Controller',
                        body: 'This is the "you" that you identify with—the conscious voice in your head. It handles complex stuff like "17 x 24" or parking in a tight spot. But here’s the catch: it takes massive effort. Focusing attention burns energy, so this system is naturally lazy. It only wakes up when it absolutely has to.',
                        prompt: "THE ENGINEER",
                        image: 'images/thinking_fast/1_3.png',
                        details: `<p>This is the "you" that you identify with—the conscious voice in your head. It handles complex stuff like "17 x 24" or parking in a tight spot. But here’s the catch: it takes massive effort. Focusing attention burns energy, so this system is naturally lazy. It only wakes up when it absolutely has to.</p>
                        <p>System 2 is effortful and slow. It's what kicks in when you're calculating a tip, learning to drive, or filling out a tax form. It requires focused attention, and attention is a finite resource. You literally <em>cannot</em> do two System 2 tasks at the same time.</p>
                        <p>The crucial insight is that System 2 is <strong>lazy by design</strong>. Because focused thinking burns mental energy, the brain avoids it whenever possible. It delegates to System 1 at every opportunity. This means that for most decisions in your life, the impulsive, pattern-matching autopilot is in charge, and the rational engineer is dozing in the back seat.</p>`
                    },
                    {
                        eyebrow: 'THE INTERACTION',
                        title: 'Rubber-Stamping Reality',
                        body: 'Here is the crucial dynamic: System 1 is constantly generating suggestions, feelings, and intuitions. System 2 should check them, but because it’s lazy, it usually just accepts them without looking. System 1 provides the impression; System 2 turns it into a belief. Most of the time, the lazy boss just rubber-stamps the intern\'s work.',
                        prompt: "THE DYNAMIC",
                        image: 'images/thinking_fast/1_4.png',
                        details: `<p>Here is the crucial dynamic: System 1 is constantly generating suggestions, feelings, and intuitions. System 2 should check them, but because it’s lazy, it usually just accepts them without looking. System 1 provides the impression; System 2 turns it into a belief. Most of the time, the lazy boss just rubber-stamps the intern\'s work.</p>
                        <p>Here is the crucial dynamic that explains most of human irrationality. System 1 is constantly generating impressions, feelings, intuitions, and snap judgments. System 2's job is to monitor these outputs and override them when they're wrong.</p>
                        <p>But because System 2 is lazy and effort-averse, it usually just <strong>endorses</strong> whatever System 1 produces. It's like a busy CEO who rubber-stamps every report from the intern without reading it. Most of the time the intern is right, so it works. But when the intern makes a mistake, the CEO signs off on it anyway. This is how biases slip through unchecked into our beliefs and decisions.</p>`
                    },
                    {
                        eyebrow: 'THE PUNCHLINE',
                        title: 'Who’s Really Driving?',
                        body: 'We like to think System 2 is the pilot of our lives. In reality, System 2 is often a passenger, and System 1 is steering the car. This efficient division of labor usually works, but it leaves us vulnerable. Because the pilot is impulsive and the co-pilot is asleep, we are prone to predictable errors and biases.',
                        prompt: "THE TRUTH",
                        image: 'images/thinking_fast/1_5.png',
                        details: `<p>We like to think System 2 is the pilot of our lives. In reality, System 2 is often a passenger, and System 1 is steering the car. This efficient division of labor usually works, but it leaves us vulnerable. Because the pilot is impulsive and the co-pilot is asleep, we are prone to predictable errors and biases.</p>
                        <p>The uncomfortable truth: you are not the rational, self-aware decision-maker you think you are. System 1 generates the narrative of your life, and System 2—which you experience as "you"—mostly just goes along for the ride, constructing post-hoc explanations for decisions that were actually made by impulse and intuition.</p>
                        <p>This is the foundation of Kahneman's entire argument. Once you understand this dynamic, you can start to see the specific, predictable ways System 1 leads you astray—the "cognitive biases" that form the next section of the book.</p>`
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
                        details: `<p>We judge how likely something is by how easily we can remember examples. Shark attacks? Terrifying, vivid, and all over the news. Falling airplane parts? Boring and hard to picture. Result: We fear the shark, even though falling debris is statistically deadlier. System 1 prefers a good horror movie over boring statistics.</p>
                        <p>System 1 judges probability not by statistics, but by how easily it can recall examples. If you can picture it vividly (plane crashes, shark attacks, terrorist attacks), it <em>feels</em> common. If you can't picture it (falling furniture, medical errors), it <em>feels</em> rare—regardless of the actual data.</p>
                        <p>This is why we fear terrorism more than car accidents, even though car accidents kill vastly more people. The news amplifies this bias by showing vivid, emotional stories. The more dramatic the footage, the more "available" it becomes in your memory, and the more dangerous it <em>feels</em>. System 1 doesn't do math—it watches movies.</p>`
                    },
                    {
                        eyebrow: 'THE REPRESENTATIVENESS HEURISTIC',
                        title: 'The Linda Problem',
                        body: 'Meet Linda: bright, outspoken, philosophy major. Is she a bank teller? Or a feminist bank teller? Most people say "feminist bank teller" because it fits her description. But logic says there are way more bank tellers than feminist ones. You just fell for a good story and ignored the math (base rates).',
                        prompt: "THE STEREOTYPE",
                        image: 'images/thinking_fast/2_2.png',
                        details: `<p>Meet Linda: bright, outspoken, philosophy major. Is she a bank teller? Or a feminist bank teller? Most people say "feminist bank teller" because it fits her description. But logic says there are way more bank tellers than feminist ones. You just fell for a good story and ignored the math (base rates).</p>
                        <p>When we judge probabilities, System 1 asks: "How well does this match my mental stereotype?" instead of "What are the base rates?" This is the <strong>Representativeness Heuristic</strong>. Linda's description sounds like a feminist, so we match her to that stereotype and ignore the basic mathematical fact that any subset (feminist bank tellers) must be smaller than the whole set (all bank tellers).</p>
                        <p>This bias is everywhere. We judge job candidates by how well they "look the part" rather than their track record. We assume a quiet, bookish person must be a librarian rather than a salesperson, even though there are far more salespeople in the world. System 1 loves a good story and hates doing statistics.</p>`
                    },
                    {
                        eyebrow: 'THE ANCHORING EFFECT',
                        title: 'Dragged Down by Randomness',
                        body: 'Your brain grabs the first number it sees—the "anchor"—and struggles to move away from it. In Kahneman’s study, a random wheel spin influenced how people guessed stats about the UN. Even when the number is totally random, it pulls your judgment toward it like a magnet, skewing your final answer.',
                        prompt: "THE ANCHOR",
                        image: 'images/thinking_fast/2_3.png',
                        details: `<p>Your brain grabs the first number it sees—the "anchor"—and struggles to move away from it. In Kahneman’s study, a random wheel spin influenced how people guessed stats about the UN. Even when the number is totally random, it pulls your judgment toward it like a magnet, skewing your final answer.</p>
                        <p>In a famous experiment, Kahneman had people spin a wheel rigged to land on 10 or 65. Then he asked: "What percentage of African nations are in the United Nations?" People who spun 10 guessed around 25%. People who spun 65 guessed around 45%. A <em>completely random number</em> had dragged their estimates toward it.</p>
                        <p>This is the <strong>Anchoring Effect</strong>. Your System 1 latches onto the first number it sees and uses it as a starting point, then adjusts from there—but never adjusts <em>enough</em>. This is why retailers show you the "original price" before the sale price, and why the first salary offer in a negotiation is so powerful. The anchor sets the game.</p>`
                    },
                    {
                        eyebrow: 'LOSS AVERSION & THE ENDOWMENT EFFECT',
                        title: 'The "Mine!" Instinct',
                        body: 'Losing $10 feels twice as bad as finding $10 feels good. This leads to the "Endowment Effect": we value things way more just because we own them. In the "Mug Experiment," owners wanted $7 to sell, but buyers would only pay $3. Simply holding the mug made it feel more valuable.',
                        prompt: "THE IMBALANCE",
                        image: 'images/thinking_fast/2_4.png',
                        details: `<p>Losing $10 feels twice as bad as finding $10 feels good. This leads to the "Endowment Effect": we value things way more just because we own them. In the "Mug Experiment," owners wanted $7 to sell, but buyers would only pay $3. Simply holding the mug made it feel more valuable.</p>
                        <p><strong>Loss Aversion</strong> is one of the most powerful biases: losing something feels about <em>twice as bad</em> as gaining it feels good. This asymmetry in how we experience gains and losses distorts all of our decisions. We hold onto bad investments too long ("I can't sell at a loss!"), stay in unsatisfying jobs, and avoid risks even when the potential reward far outweighs the potential loss.</p>
                        <p>The <strong>Endowment Effect</strong> is a consequence: simply owning something makes us value it more. In the famous mug experiment, people given a mug demanded ~$7 to sell it, while people without one would only pay ~$3. The only difference was ownership. Selling the mug feels like a loss, and losses loom larger than gains.</p>`
                    },
                    {
                        eyebrow: 'CONFIRMATION BIAS',
                        title: 'The Evidence You Went Looking For',
                        body: 'Once you believe something, your mind stops being a judge and starts being a lawyer. You search for the articles that agree with you, read the ones that don’t with far more suspicion, and remember the hits while quietly forgetting the misses. It doesn’t feel like bias from the inside. It feels like doing research.',
                        prompt: "BUILDING THE CASE",
                        image: 'images/thinking_fast/2_7.png',
                        details: `<p>Once you believe something, your mind stops being a judge and starts being a lawyer. You search for the articles that agree with you, read the ones that don’t with far more suspicion, and remember the hits while quietly forgetting the misses. It doesn’t feel like bias from the inside. It feels like doing research.</p>
                        <p>Suppose you decide a particular investment is a sure thing. Now watch what happens. You will actively seek out the analysts who share your view. When you hit a warning article, you will scrutinise the author's credentials in a way you never did for the ones who agreed. Weeks later you will remember a wall of supporting evidence—because that is the only kind you filed.</p>
                        <p>What makes confirmation bias so hard to catch is that <strong>every individual step feels rational</strong>. Nobody consciously decides to ignore contrary evidence. System 1 simply finds agreeable information easier to process, and System 2 is too lazy to insist on a genuine search. The practical antidote is uncomfortable and effective: before you commit, go looking specifically for the <em>strongest</em> version of the case against you—and make yourself state it well enough that someone who holds it would agree you got it right.</p>`
                    },
                    {
                        eyebrow: 'THE HALO EFFECT',
                        title: 'One Good Trait Colours Everything',
                        body: 'You like someone’s first impression, and your mind quietly extends that goodwill to everything else about them—their intelligence, their honesty, their competence—on no evidence at all. We assume attractive people are smarter and kinder. We assume a CEO who gives a brilliant presentation must also be a brilliant strategist.',
                        prompt: "THE GLOW OF ONE GOOD TRAIT",
                        image: 'images/thinking_fast/2_8.png',
                        details: `<p>You like someone’s first impression, and your mind quietly extends that goodwill to everything else about them—their intelligence, their honesty, their competence—on no evidence at all. We assume attractive people are smarter and kinder. We assume a CEO who gives a brilliant presentation must also be a brilliant strategist.</p>
                        <p>System 1 hates a mixed picture. It wants people, brands and companies to be coherent—all good or all bad—because a coherent story is easy to hold and act on. So a single vivid positive trait radiates outward and quietly fills in every blank you have no information about.</p>
                        <p>The effect runs backwards too, which is why it is dangerous in practice. A person who made a poor first impression will find that their good work is discounted for months. Kahneman's recommended fix is <strong>de-correlating error</strong>: when you must judge several things about the same person—or several candidates on several criteria—score each dimension independently and in isolation, before you let yourself form an overall impression. Interview panels that score each answer separately, rather than debating the candidate as a whole, make measurably better hires.</p>`
                    },
                    {
                        eyebrow: 'THE FRAMING EFFECT',
                        title: 'It’s All About Presentation',
                        body: '"90% survival rate" sounds great. "10% mortality rate" sounds terrifying. They are the exact same statistic! But your System 1 reacts emotionally to the words "survival" (good!) and "mortality" (bad!), causing you to make totally different decisions based entirely on how the info is framed.',
                        prompt: "THE FRAME",
                        image: 'images/thinking_fast/2_5.png',
                        details: `<p>"90% survival rate" sounds great. "10% mortality rate" sounds terrifying. They are the exact same statistic! But your System 1 reacts emotionally to the words "survival" (good!) and "mortality" (bad!), causing you to make totally different decisions based entirely on how the info is framed.</p>
                        <p>The same objective information can lead to completely different decisions depending on how it is presented. "90% survival rate" and "10% mortality rate" are identical facts, but patients and doctors react to them very differently. System 1 responds to the emotional color of the words, not the mathematical content.</p>
                        <p>This is exploited constantly in marketing, politics, and media. "95% fat-free" sells better than "5% fat." Politicians frame taxes as "investment" or "burden" depending on their goal. Understanding the Framing Effect is essential for critical thinking—whenever you're making a decision, try to reframe the information in the opposite way and see if your feelings change.</p>`
                    },
                    {
                        eyebrow: 'THE SUNK COST FALLACY',
                        title: 'Throwing Good After Bad',
                        body: 'You sit through the terrible film because you paid for the ticket. The company pours another million into the failing project because it has already spent five. But the money is gone either way—it cannot be recovered by suffering more. The only rational question is whether the next hour, or the next million, is worth spending from here.',
                        prompt: "THE MONEY IS ALREADY GONE",
                        image: 'images/thinking_fast/2_9.png',
                        details: `<p>You sit through the terrible film because you paid for the ticket. The company pours another million into the failing project because it has already spent five. But the money is gone either way—it cannot be recovered by suffering more. The only rational question is whether the next hour, or the next million, is worth spending from here.</p>
                        <p>Sunk costs are past investments—time, money, effort—that no future decision can recover. Economics says to ignore them entirely and judge only what happens next. Humans find this almost impossible, because abandoning the project means <em>admitting a loss</em>, and by loss aversion that admission hurts roughly twice as much as the equivalent gain would please us.</p>
                        <p>So we keep going, not because continuing is wise but because stopping makes the loss official. Notice how many long-running disasters this explains: failing companies, doomed construction projects, wars that continue so the earlier casualties "won't have been for nothing," and relationships preserved on the strength of the years already invested. The useful reframe is to ask a stranger's question: <strong>"If I were arriving fresh today, with no history here, would I choose to start this?"</strong> If the answer is no, the history is not a reason. It is just the bill.</p>`
                    },
                    {
                        eyebrow: 'THE PLANNING FALLACY',
                        title: 'It Always Takes Longer',
                        body: 'The contractor says two weeks and ten thousand. Six weeks and eighteen thousand later, the kitchen is finally done. This is not usually dishonesty—it is a bias that affects nearly everyone, nearly always, in the same direction: we systematically underestimate time, cost and risk while overestimating the benefits.',
                        prompt: "TWO WEEKS, THEY SAID",
                        image: 'images/thinking_fast/2_10.png',
                        details: `<p>The contractor says two weeks and ten thousand. Six weeks and eighteen thousand later, the kitchen is finally done. This is not usually dishonesty—it is a bias that affects nearly everyone, nearly always, in the same direction: we systematically underestimate time, cost and risk while overestimating the benefits.</p>
                        <p>The planning fallacy is WYSIATI applied to the future. When you plan, you build a vivid mental model of the project going as intended—the steps you can see, in the order you imagine them. What you cannot picture, and therefore do not budget for, is the specific illness, the supplier who fails, the permit that takes a month. Each unknown is individually unpredictable, but <strong>the existence of unknowns is entirely predictable</strong>.</p>
                        <p>Kahneman's remedy is the <strong>outside view</strong>. Stop asking "how long will <em>this</em> project take?" and start asking "how long did similar projects actually take?" The inside view produces an inspiring plan; the reference class produces an accurate one. When the two disagree—and they always do—the base rate is usually right and your detailed plan is usually wrong.</p>`
                    },
                    {
                        eyebrow: 'HINDSIGHT BIAS',
                        title: 'I Knew It All Along',
                        body: 'After the crash, everybody can see that the signs were obvious. After the election upset, of course it was going to happen. But before the event the outcome was genuinely uncertain—and you did not think so at the time. Once you know the ending, your mind rewrites the past into a story where it was always heading there.',
                        prompt: "THE OBVIOUS-IN-RETROSPECT",
                        image: 'images/thinking_fast/2_11.png',
                        details: `<p>After the crash, everybody can see that the signs were obvious. After the election upset, of course it was going to happen. But before the event the outcome was genuinely uncertain—and you did not think so at the time. Once you know the ending, your mind rewrites the past into a story where it was always heading there.</p>
                        <p>The unsettling part is that you lose access to your former self. Once an outcome is known, people genuinely cannot reconstruct what they believed beforehand; asked to recall their old prediction, they report something much closer to what actually happened. The old belief isn't hidden—it has been overwritten.</p>
                        <p>This does two kinds of damage. First, it makes the world look far more predictable than it is, which feeds overconfidence about the future. Second, it produces what Kahneman calls <strong>outcome bias</strong>: we judge decisions by how they turned out rather than by whether they were sensible given what was knowable at the time. Good decisions with bad luck get punished; reckless decisions that happened to work get rewarded and imitated. The defence is simple and rarely practised—<em>write your predictions down before you find out</em>, so your past self can testify on his or her own behalf.</p>`
                    },
                    {
                        eyebrow: 'WYSIATI (THE MASTER CONCEPT)',
                        title: 'What You See Is All There Is',
                        body: 'This is the root of all biases. System 1 creates a coherent story based only on the info right in front of it. It doesn\'t ask, "What am I missing?" It assumes the limited view through the keyhole is the whole world. It jumps to conclusions because it ignores the unknown.',
                        prompt: "THE MASTER KEY",
                        image: 'images/thinking_fast/2_6.png',
                        details: `<p>This is the root of all biases. System 1 creates a coherent story based only on the info right in front of it. It doesn\'t ask, "What am I missing?" It assumes the limited view through the keyhole is the whole world. It jumps to conclusions because it ignores the unknown.</p>
                        <p><strong>WYSIATI</strong> is Kahneman's master concept that underpins all the biases. System 1 builds the best possible story from whatever information is immediately available. It does not pause to ask, "What information am I missing?" It simply works with what it has, and it's remarkably good at constructing a coherent, confident narrative from very limited data.</p>
                        <p>This is why first impressions are so powerful, why we jump to conclusions, and why we feel confident even when we shouldn't. The less you know, the easier it is for System 1 to build a clean, simple story—and the more confident you feel. Paradoxically, <strong>ignorance breeds confidence</strong>. This is the cognitive root of overconfidence, one of humanity's most persistent and dangerous biases.</p>`
                    }
                ]
            },
            {
                tag: 'Part 2',
                title: 'The Two Selves',
                subtitle: 'The difference between happiness you experience and happiness you remember.',
                cards: [
                    {
                        eyebrow: 'THE SPLIT',
                        title: 'Two Versions of You',
                        body: 'Kahneman makes a shocking distinction: you have two "selves" that judge your happiness differently. The "Experiencing Self" lives in the present moment. The "Remembering Self" writes the story of your life. Crucially, they often disagree about what makes you happy. The one you listen to determines how you live.',
                        prompt: "WHICH SELF ARE YOU?",
                        image: 'images/thinking_fast/3_1.png',
                        details: `<p>Kahneman makes a shocking distinction: you have two "selves" that judge your happiness differently. The "Experiencing Self" lives in the present moment. The "Remembering Self" writes the story of your life. Crucially, they often disagree about what makes you happy. The one you listen to determines how you live.</p>
                        <p>Kahneman identifies a fundamental split in how we evaluate our own well-being. The <strong>Experiencing Self</strong> is the one who lives through each moment\u2014feeling pleasure, pain, boredom, joy, right now. The <strong>Remembering Self</strong> is the one who keeps score, writes the narrative of your life, and makes decisions about the future based on past memories.</p>
                        <p>The problem? These two selves often give completely different answers about happiness. You might have a wonderful two-week vacation (the Experiencing Self was happy) but remember it as mediocre because the last day was ruined by a flight delay (the Remembering Self wrote a bad ending). Which self's happiness matters more?</p>`
                    },
                    {
                        eyebrow: 'THE PEAK-END RULE',
                        title: 'The Story Wins',
                        body: 'When the Remembering Self judges an experience, it doesn\'t calculate the average. It remembers only two things: the most intense moment (the peak) and how it ended. A painful medical procedure that ends gently is remembered as "not so bad." A wonderful vacation with a terrible last day is remembered as a failure. Duration is almost completely ignored.',
                        prompt: "HOW MEMORY CHEATS",
                        image: 'images/thinking_fast/3_2.png',
                        details: `<p>When the Remembering Self judges an experience, it doesn\'t calculate the average. It remembers only two things: the most intense moment (the peak) and how it ended. A painful medical procedure that ends gently is remembered as "not so bad." A wonderful vacation with a terrible last day is remembered as a failure. Duration is almost completely ignored.</p>
                        <p>In a famous experiment, patients undergoing a colonoscopy were divided into two groups. One group had a short procedure. The other had a longer procedure, but the doctor left the scope in place at the end without moving it\u2014adding minutes of mild discomfort, but making the <em>ending</em> gentler. The second group rated the experience as significantly less painful, even though they objectively suffered more.</p>
                        <p>This is the <strong>Peak-End Rule</strong>: the Remembering Self judges an experience based on its most intense moment and its ending, while largely ignoring total duration. This means that how something <em>ends</em> matters more than how long it lasts. It explains why a great movie with a bad ending feels like a bad movie, and why first dates focus so heavily on the goodbye.</p>`
                    },
                    {
                        eyebrow: 'THE PROOF',
                        title: 'The Cold Hand Experiment',
                        body: 'Volunteers held a hand in painfully cold water for 60 seconds. Then they did it again for 90 seconds—the same 60 seconds, plus 30 more during which the water was warmed very slightly, still unpleasant. Asked which trial they would repeat, most chose the longer one. They volunteered for more total pain, because it ended better.',
                        prompt: "MORE PAIN, BETTER ENDING",
                        image: 'images/thinking_fast/3_4.png',
                        details: `<p>Volunteers held a hand in painfully cold water for 60 seconds. Then they did it again for 90 seconds—the same 60 seconds, plus 30 more during which the water was warmed very slightly, still unpleasant. Asked which trial they would repeat, most chose the longer one. They volunteered for more total pain, because it ended better.</p>
                        <p>This is the cleanest demonstration in the whole book, because there is no ambiguity about which self is right. The long trial contained <em>every second</em> of the short trial and then thirty additional seconds of discomfort. By any measure the Experiencing Self cares about, it was strictly worse. And yet a clear majority chose to repeat it.</p>
                        <p>Kahneman calls this <strong>duration neglect</strong> in action: the Remembering Self does not add up suffering, it samples the peak and the ending and files a verdict. The unsettling part is what happened next—the volunteers were making a <em>choice about their own future</em>. When your Remembering Self and your Experiencing Self disagree, the Remembering Self is the one holding the pen, and it will happily sign your Experiencing Self up for more pain in exchange for a tidier story.</p>
                        <p>Sit with that, because it is not a laboratory curiosity. It is why people return to jobs, holidays and relationships that they did not actually enjoy while living through them.</p>`
                    },
                    {
                        eyebrow: 'THE CONSEQUENCE',
                        title: 'Memories vs. Moments',
                        body: 'This creates a deep conflict. You can plan a life to maximize pleasant experiences (lots of small daily joys) or to maximize great memories (big, intense adventures). They are different strategies. Kahneman doesn\'t say which is right, but he forces you to realize you\'ve been blindly letting your Remembering Self make all the calls.',
                        prompt: "THE DILEMMA",
                        image: 'images/thinking_fast/3_3.png',
                        details: `<p>This creates a deep conflict. You can plan a life to maximize pleasant experiences (lots of small daily joys) or to maximize great memories (big, intense adventures). They are different strategies. Kahneman doesn\'t say which is right, but he forces you to realize you\'ve been blindly letting your Remembering Self make all the calls.</p>
                        <p>This creates a genuine dilemma about how to live. You can optimize for the Experiencing Self\u2014filling your days with small, pleasant moments (a good coffee, a walk in the sun, time with friends). Or you can optimize for the Remembering Self\u2014pursuing intense, memorable peak experiences (climbing a mountain, traveling to exotic places) even if the day-to-day journey is uncomfortable.</p>
                        <p>Kahneman doesn't tell you which strategy is correct. But he forces you to confront the fact that most people unknowingly let the <strong>Remembering Self make all the decisions</strong>\u2014choosing vacations for the photos, careers for the story, partners for the narrative. Are you living for the experience, or for the memory?</p>`
                    }
                ]
            },
            {
                tag: 'Part 3',
                title: 'Why It Matters',
                subtitle: 'How understanding your mental glitches makes you more effective and more free.',
                cards: [
                    {
                        eyebrow: 'THE INNER OBSERVER',
                        title: 'Catching the Glitch in Real Time',
                        body: 'Once you learn the names of your biases, you start catching yourself in the act. You notice when you\'re anchoring to a first price, when you\'re judging by a stereotype, when you\'re feeling loss aversion. You can\'t eliminate biases, but you can build an "inner observer" that flags them, giving your System 2 a chance to intervene.',
                        prompt: "THE PRACTICAL SKILL",
                        image: 'images/thinking_fast/4_1.png',
                        details: `<p>Once you learn the names of your biases, you start catching yourself in the act. You notice when you\'re anchoring to a first price, when you\'re judging by a stereotype, when you\'re feeling loss aversion. You can\'t eliminate biases, but you can build an "inner observer" that flags them, giving your System 2 a chance to intervene.</p>
                        <p>The most practical takeaway from Kahneman's work is this: you cannot eliminate your cognitive biases. They are hardwired into System 1. But you <em>can</em> learn to recognize them in the moment. Once you know the name "Anchoring Effect," you start noticing when a salesperson is using an anchor on you.</p>
                        <p>This builds what we can call an <strong>"inner observer"</strong>\u2014a mental habit of pausing and asking, "Is my System 1 running the show right now?" You won't catch every bias, but even catching a few of the big ones\u2014especially in important decisions about money, relationships, and career\u2014can dramatically improve the quality of your life.</p>`
                    },
                    {
                        eyebrow: 'INTELLECTUAL HUMILITY',
                        title: 'You\'re Not As Smart As You Think',
                        body: 'WYSIATI and the Remembering Self teach a powerful lesson: your confidence in your beliefs is not a reliable guide to truth. You feel certain because your System 1 built a clean story\u2014not because you actually have all the information. This breeds intellectual humility: the healthy habit of questioning your own conclusions.',
                        prompt: "THE GIFT OF DOUBT",
                        image: 'images/thinking_fast/4_2.png',
                        details: `<p>WYSIATI and the Remembering Self teach a powerful lesson: your confidence in your beliefs is not a reliable guide to truth. You feel certain because your System 1 built a clean story\u2014not because you actually have all the information. This breeds intellectual humility: the healthy habit of questioning your own conclusions.</p>
                        <p>One of the most valuable lessons from Kahneman is that the feeling of certainty is a product of System 1's storytelling, not an accurate measure of how much you actually know. WYSIATI means you can feel absolutely confident about a judgment based on deeply incomplete information.</p>
                        <p>This breeds <strong>intellectual humility</strong>\u2014the healthy habit of questioning your own conclusions, seeking disconfirming evidence, and holding your beliefs more loosely. It is the antidote to the overconfidence that plagues experts, politicians, and everyday decision-makers alike. The wisest people are often those most aware of how easily they can be wrong.</p>`
                    },
                    {
                        eyebrow: 'BETTER DECISIONS',
                        title: 'Designing Choice Architecture',
                        body: 'If you know how biases work, you can design environments that work with your brain instead of against it. Want to save more? Set up automatic deposits (remove the need for a System 2 decision). Want to eat healthier? Put fruit at eye level. This is "choice architecture"\u2014arranging options so that the lazy System 2 defaults to a good choice.',
                        prompt: "HACK YOUR OWN BRAIN",
                        image: 'images/thinking_fast/4_3.png',
                        details: `<p>If you know how biases work, you can design environments that work with your brain instead of against it. Want to save more? Set up automatic deposits (remove the need for a System 2 decision). Want to eat healthier? Put fruit at eye level. This is "choice architecture"\u2014arranging options so that the lazy System 2 defaults to a good choice.</p>
                        <p>Since you know System 2 is lazy and will default to the path of least resistance, you can <strong>design your environment</strong> so that the easy path is also the smart path. This is called <strong>choice architecture</strong>.</p>
                        <p>Want to save money? Set up automatic transfers so you never have to make a conscious decision. Want to eat healthier? Put fruit on the counter and hide the cookies. Want to exercise? Lay out your gym clothes the night before. By reducing the effort required for good choices, you work <em>with</em> your lazy System 2 instead of fighting it. You're not changing your brain\u2014you're changing the landscape it navigates.</p>`
                    },
                    {
                        eyebrow: 'EMOTIONAL FREEDOM',
                        title: 'Feelings Are Data, Not Commands',
                        body: 'Kahneman empowers you to treat your emotional reactions as signals from System 1\u2014data to be evaluated, not commands to be obeyed. That surge of anger, that flash of fear, that gut feeling of certainty\u2014they are all just System 1\'s rapid-fire interpretations. You can acknowledge them and then decide if they\'re actually appropriate.',
                        prompt: "THE ULTIMATE TAKEAWAY",
                        image: 'images/thinking_fast/4_4.png',
                        details: `<p>Kahneman empowers you to treat your emotional reactions as signals from System 1\u2014data to be evaluated, not commands to be obeyed. That surge of anger, that flash of fear, that gut feeling of certainty\u2014they are all just System 1\'s rapid-fire interpretations. You can acknowledge them and then decide if they\'re actually appropriate.</p>
                        <p>Perhaps the most liberating insight from the entire book: your feelings and intuitions are not sacred truths. They are rapid-fire outputs from System 1\u2014fast, automatic, and often useful, but also frequently biased, incomplete, and wrong.</p>
                        <p>This means you can learn to treat emotions as <strong>data, not commands</strong>. That surge of anger during an argument? It's System 1's threat detection. That feeling of certainty about a decision? It might be WYSIATI. That gut instinct about a person? It could be the Representativeness Heuristic. You can acknowledge these feelings, thank them for the information, and then make a deliberate choice about whether to act on them. This is emotional intelligence, powered by cognitive science.</p>`
                    }
                ]
            }
        ]
    };
