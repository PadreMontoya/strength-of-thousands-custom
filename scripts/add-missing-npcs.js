/**
 * Script to add all missing NPCs to the Magaambya NPCs journal
 * Run this in Foundry VTT console after loading the module
 */

async function addMissingNPCs() {
    console.log("Adding missing NPCs to Magaambya NPCs journal...");
    
    // Find the Magaambya NPCs journal
    const npcJournal = game.journal.find(j => j.name === "Magaambya NPCs");
    if (!npcJournal) {
        ui.notifications.error("Magaambya NPCs journal not found!");
        return;
    }
    
    // Define all the missing NPCs
    const missingNPCs = [
        {
            name: "Esi Djana (Tempest-Sun Mage)",
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
<p><strong>Friendship Bead:</strong> Bead from Esi Djana</p>`
        },
        {
            name: "Haibram Thodja (Rain-Scribe)",
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
<p><strong>Friendship Bead:</strong> Bead from Haibram Thodja</p>`
        },
        {
            name: "Ignaci Canterells (Emerald Bough)",
            content: `<p><strong>LN | male | human | mysterious thaumaturge</strong></p>
<p><strong>Branch:</strong> Emerald Bough<br>
<strong>Notable Skills:</strong> Deception, Diplomacy, Occultism, Society<br>
<strong>Hobbies:</strong> cryptography, political theory, mysterious research</p>
<h3>Description</h3>
<p>Ignaci is a quiet, mysterious human who seems to know more than he lets on. He's deeply interested in the political situation in Vidrian and often works on coded messages and secret projects. Despite his secretive nature, he's genuinely committed to justice and helping others.</p>
<h3>Personality</h3>
<p><strong>Most Well Known For:</strong> always seeming to know campus secrets before anyone else<br>
<strong>Strangest Quirk:</strong> writes everything in code, even grocery lists<br>
<strong>Common Associates:</strong> Noxolo (discussing philosophy), Tzeniwe (fashion advice), works alone mostly</p>
<div data-visibility="gm">
<h4>Key Character Traits</h4>
<p><strong>Mysterious • Intelligent • Secretive • Principled • Observant</strong></p>
<h4>Things Ignaci Might Say</h4>
<ul>
<li><em>"There's more going on here than meets the eye. If you know how to look, the signs are everywhere."</em></li>
<li><em>"Sometimes the most important conversations happen in the spaces between words."</em></li>
</ul>
<p><strong>Speech Mannerism:</strong> Speaks carefully and deliberately, often in cryptic phrases that have deeper meanings.</p>
<p><strong>Physical Mannerism:</strong> Often fidgets with a small cipher wheel or coded notebook.</p>
</div>
<p><strong>Friendship Bead:</strong> Bead from Ignaci Canterells</p>`
        },
        {
            name: "Mariama Keitana (Cascade Bearer)",
            content: `<p><strong>CN | female | human | chaos magnet</strong></p>
<p><strong>Branch:</strong> Cascade Bearers<br>
<strong>Notable Skills:</strong> Deception, Intimidation, Occultism, Religion<br>
<strong>Hobbies:</strong> combat theory, occult lore, linguistics</p>
<h3>Description</h3>
<p>Teachers at the Magaambya tactfully describe Mariama as a student with an "interesting" personality. Undeniably a knowledgeable occultist and accomplished spellcaster, the young woman falters between responsibility and unreliability with infuriating frequency. Her attitude likewise flips between unbearable kindness to her friends and outright viciousness to her foes.</p>
<h3>Personality</h3>
<p><strong>Most Well Known For:</strong> summoning a devil on accident during a routine lesson<br>
<strong>Strangest Quirk:</strong> knows swear words in almost every language on Golarion<br>
<strong>Common Associates:</strong> Chizire (brewing weird liquors), Okoro (board games), Esi and Haibram (sparring partners)</p>
<div data-visibility="gm">
<h4>Key Character Traits</h4>
<p><strong>Unpredictable • Brilliant • Moody • Loyal • Chaotic</strong></p>
<h4>Things Mariama Might Say</h4>
<ul>
<li><em>"Magic is supposed to be unpredictable! If you can control it completely, you're not pushing the boundaries hard enough."</em></li>
<li><em>"Oh, that spell went wrong? At least it was interesting. Boring magic is the real failure."</em></li>
</ul>
<p><strong>Speech Mannerism:</strong> Alternates between brilliant insights and chaotic rambling, often peppered with multilingual profanity.</p>
<p><strong>Physical Mannerism:</strong> Hair color changes with her mood due to minor magical mishaps.</p>
</div>
<p><strong>Friendship Bead:</strong> Bead from Mariama Keitana</p>`
        },
        {
            name: "Noxolo (Uzunjati)",
            content: `<p><strong>LN | female | human | augur</strong></p>
<p><strong>Branch:</strong> Uzunjati<br>
<strong>Notable Skills:</strong> Deception, Medicine, Performance, Religion<br>
<strong>Hobbies:</strong> dance, high fashion, kite-flying, watching motes of dust float through the air</p>
<h3>Description</h3>
<p>Noxolo fled from her home to escape her overbearing family, who had planned out every aspect of her life. Whispers from dead birds and cow bones told her she could find freedom at the Magaambya, and so she went, not knowing what to expect. What she discovered was a far bigger world than she'd ever dreamt possible, and a chance to unravel the mysteries of the strange whispers she hears.</p>
<h3>Personality</h3>
<p><strong>Most Well Known For:</strong> pausing to dance and sing about what she's doing when excited<br>
<strong>Strangest Quirk:</strong> always uses murder in her hypothetical examples<br>
<strong>Common Associates:</strong> Anchor Root (scavenging bones), Ignaci and Tzeniwe (discussing fashion)</p>
<div data-visibility="gm">
<h4>Key Character Traits</h4>
<p><strong>Dreamy • Spiritual • Eccentric • Artistic • Morbid</strong></p>
<h4>Things Noxolo Might Say</h4>
<ul>
<li><em>"The bones whisper such interesting things... they say you're going to have a very eventful week. Not necessarily good, but definitely eventful."</em></li>
<li><em>"Fashion is just another form of divination, really. The way someone dresses tells you everything about their future."</em></li>
</ul>
<p><strong>Speech Mannerism:</strong> Speaks in a dreamy, distracted way, often referencing omens or spiritual insights.</p>
<p><strong>Physical Mannerism:</strong> Often pauses mid-conversation to listen to something only she can hear.</p>
</div>
<p><strong>Friendship Bead:</strong> Bead from Noxolo</p>`
        }
    ];
    
    // Add each NPC as a new page
    for (let i = 0; i < missingNPCs.length; i++) {
        const npc = missingNPCs[i];
        await npcJournal.createEmbeddedDocuments("JournalEntryPage", [{
            name: npc.name,
            type: "text",
            title: { show: true, level: 2 },
            text: {
                format: 1,
                content: npc.content
            },
            sort: (i + 3) * 100000 // Start after existing pages
        }]);
        
        console.log(`Added ${npc.name}`);
    }
    
    console.log("Phase 1 complete. Run addRemainingNPCs() for the last 2 NPCs.");
}

// Run the function
addMissingNPCs();
