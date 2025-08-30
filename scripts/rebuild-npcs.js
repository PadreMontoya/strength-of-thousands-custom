/**
 * Script to create the complete Magaambya NPCs journal
 * Run this after rebuild-journals.js
 */

async function rebuildNPCs() {
    console.log("Creating Magaambya NPCs journal...");
    
    const npcJournal = await JournalEntry.create({
        name: "Magaambya NPCs",
        ownership: { default: 2 },
        pages: [
            {
                name: "Student NPCs Overview",
                type: "text",
                title: { show: true, level: 1 },
                text: {
                    format: 1,
                    content: `<h1>Magaambya NPCs - Students and Faculty</h1>
<p>This document contains detailed descriptions of all the major NPCs at the Magaambya academy for Book 2 of Strength of Thousands.</p>
<h2>Student NPCs</h2>
<p>The following pages contain detailed information about your fellow students at the Magaambya. Each student belongs to one of the five branches of magic and has their own unique personality, interests, and background.</p>
<p>Building friendships with these students will provide both social benefits and practical advantages during your time at the academy.</p>`
                }
            },
            {
                name: "Anchor Root (Rain-Scribe)",
                type: "text",
                title: { show: true, level: 2 },
                text: {
                    format: 1,
                    content: `<p><strong>N | female | ant gnoll | bonekeeper-in-training</strong></p>
<p><strong>Branch:</strong> Rain-Scribes<br>
<strong>Notable Skills:</strong> Nature, Occultism, Stealth, Survival<br>
<strong>Hobbies:</strong> sand sculptures, raising beetles, musical curation</p>
<h3>Description</h3>
<p>Anchor Root is a 3-foot-tall ant gnoll who resembles an aardwolf more than a deadly carnivore. She hails from the small Redridge clan, several weeks' travel south-west from the Magaambya. Her clan has been in decline for several decades, with important storytellers and religious leaders dying before suitable replacements could be trained.</p>
<h3>Personality</h3>
<p><strong>Most Well Known For:</strong> interrupting herself halfway through a presentation to exclaim "I'm sorry, I'm boring you" and running out of the room crying<br>
<strong>Strangest Quirk:</strong> uses a chicken tied to a stick to keep her room free of unwanted bugs<br>
<strong>Common Associates:</strong> Esi (working on music playback magic), Noxolo (scavenging bones), Tzeniwe (stress baking)</p>
<div data-visibility="gm">
<h4>Key Character Traits</h4>
<p><strong>Shy • Hesitant • Apologetic • Lacks Confidence • Introvert</strong></p>
<h4>Things Anchor Root Might Say</h4>
<ul>
<li><em>"Oh! I'm sorry, I didn't mean to— I was just— never mind, it's probably not important anyway..."</em> (trails off and looks down)</li>
<li><em>"My clan elders always say that a good bonekeeper listens more than they speak, so I try to... well, I probably talk too much already, don't I?"</em></li>
</ul>
<p><strong>Speech Mannerism:</strong> Frequently apologizes and second-guesses herself mid-sentence, often trailing off or asking for permission to continue speaking.</p>
<p><strong>Physical Mannerism:</strong> Looks down and sweeps her foot in small arcs when nervous or embarrassed.</p>
</div>
<p><strong>Friendship Bead:</strong> @UUID[Item.BeadFromAnchorRoot001]{Bead from Anchor Root}</p>`
                }
            },
            {
                name: "Chizire (Cascade Bearer)",
                type: "text",
                title: { show: true, level: 2 },
                text: {
                    format: 1,
                    content: `<p><strong>CN | male | catfolk | alchemist</strong></p>
<p><strong>Branch:</strong> Cascade Bearers<br>
<strong>Notable Skills:</strong> Crafting, Medicine, Stealth, Thievery<br>
<strong>Hobbies:</strong> brewing, mechanical engineering, moonshine distillation</p>
<h3>Description</h3>
<p>Chizire is a laid-back catfolk who seems to effortlessly excel at everything he attempts, much to the frustration of his more studious peers. Despite appearing to pay little attention in class, he consistently produces innovative solutions and high-quality work.</p>
<h3>Personality</h3>
<p><strong>Most Well Known For:</strong> building a complete moonshine still in his dorm room from scrap<br>
<strong>Strangest Quirk:</strong> always knowing the answer when called on despite visibly not paying attention<br>
<strong>Common Associates:</strong> Anchor Root (brewing experimental elixirs), Mariama (brewing weird liquors), Okoro (gaming group)</p>
<div data-visibility="gm">
<h4>Key Character Traits</h4>
<p><strong>Clever • Lazy • Mischievous • Sarcastic • Underachiever</strong></p>
<h4>Things Chizire Might Say</h4>
<ul>
<li><em>"Oh, that? Yeah, I figured that out weeks ago. Didn't think it was worth mentioning."</em> (shrugs casually while tinkering with something)</li>
<li><em>"You know what this campus really needs? A distillery. For... educational purposes, obviously."</em></li>
</ul>
<p><strong>Speech Mannerism:</strong> Speaks with casual confidence and dry humor, often while appearing to be distracted by whatever he's building or fixing.</p>
<p><strong>Physical Mannerism:</strong> Picks his teeth with a claw while thinking or when being deliberately obtuse.</p>
</div>
<p><strong>Friendship Bead:</strong> @UUID[Item.BeadFromChizire001]{Bead from Chizire}</p>`
                }
            },
            {
                name: "Esi Djana (Tempest-Sun Mage)",
                type: "text",
                title: { show: true, level: 2 },
                text: {
                    format: 1,
                    content: `<p><strong>LG | female | human | social organizer</strong></p>
<p><strong>Branch:</strong> Tempest-Sun Mages<br>
<strong>Notable Skills:</strong> Athletics, Diplomacy, Intimidation, Society<br>
<strong>Hobbies:</strong> event planning, competitive sports, music</p>
<h3>Description</h3>
<p>Esi Djana is an energetic and outgoing human who seems to know everyone on campus. She's constantly organizing events, study groups, and social gatherings. Her enthusiasm is infectious, and she has a talent for bringing people together.</p>
<h3>Personality</h3>
<p><strong>Most Well Known For:</strong> organizing the most successful campus events and always knowing what's happening where<br>
<strong>Strangest Quirk:</strong> keeps detailed notes about everyone's preferences and interests in a special journal<br>
<strong>Common Associates:</strong> Everyone - she's the social hub of the campus</p>
<div data-visibility="gm">
<h4>Key Character Traits</h4>
<p><strong>Energetic • Outgoing • Organized • Caring • Natural Leader</strong></p>
<h4>Things Esi Might Say</h4>
<ul>
<li><em>"Oh, you should totally come to the study group I'm organizing! I think you'd really get along with..."</em></li>
<li><em>"I was just thinking we need more activities that bring all the branches together. What do you think about..."</em></li>
</ul>
<p><strong>Speech Mannerism:</strong> Speaks quickly and enthusiastically, often jumping from topic to topic as new ideas occur to her.</p>
<p><strong>Physical Mannerism:</strong> Gestures animatedly while talking and often pulls out her notebook to jot down ideas.</p>
</div>
<p><strong>Friendship Bead:</strong> @UUID[Item.BeadFromEsiDjana001]{Bead from Esi Djana}</p>`
                }
            },
            {
                name: "Haibram Thodja (Rain-Scribe)",
                type: "text",
                title: { show: true, level: 2 },
                text: {
                    format: 1,
                    content: `<p><strong>CN | male | human | daredevil</strong></p>
<p><strong>Branch:</strong> Rain-Scribes<br>
<strong>Notable Skills:</strong> Acrobatics, Athletics, Nature, Survival<br>
<strong>Hobbies:</strong> extreme sports, cliff diving, dangerous stunts</p>
<h3>Description</h3>
<p>Haibram is a reckless human who believes the best way to learn about nature is to throw yourself into it headfirst. He's constantly getting into scrapes and adventures, much to the concern of his teachers and the admiration of his peers.</p>
<h3>Personality</h3>
<p><strong>Most Well Known For:</strong> attempting to ride a hippo during a field study expedition<br>
<strong>Strangest Quirk:</strong> collects scars and has a story for each one<br>
<strong>Common Associates:</strong> Esi (sparring partner), Mariama (fellow troublemaker), anyone up for adventure</p>
<div data-visibility="gm">
<h4>Key Character Traits</h4>
<p><strong>Reckless • Brave • Impulsive • Charismatic • Thrill-seeker</strong></p>
<h4>Things Haibram Might Say</h4>
<ul>
<li><em>"Come on, what's the worst that could happen? Actually, don't answer that - it'll probably give me ideas!"</em></li>
<li><em>"You can't really understand something until you've experienced it firsthand. Books are fine, but real life is where the learning happens!"</em></li>
</ul>
<p><strong>Speech Mannerism:</strong> Speaks with infectious enthusiasm about his latest adventure or crazy idea.</p>
<p><strong>Physical Mannerism:</strong> Often has bandages or healing scratches from his latest escapade.</p>
</div>
<p><strong>Friendship Bead:</strong> @UUID[Item.BeadFromHaibram001]{Bead from Haibram Thodja}</p>`
                }
            }
        ]
    });
    
    console.log("Created Magaambya NPCs journal with", npcJournal.pages.size, "pages");
    console.log("NPC rebuild phase 1 complete. Need to add remaining 5 NPCs manually or run additional scripts.");
}

// Run the NPC rebuild
rebuildNPCs();
