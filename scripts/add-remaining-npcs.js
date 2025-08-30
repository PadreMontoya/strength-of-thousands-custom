/**
 * Script to add the final NPCs to the Magaambya NPCs journal
 * Run this after add-missing-npcs.js
 */

async function addRemainingNPCs() {
    console.log("Adding final NPCs to Magaambya NPCs journal...");
    
    // Find the Magaambya NPCs journal
    const npcJournal = game.journal.find(j => j.name === "Magaambya NPCs");
    if (!npcJournal) {
        ui.notifications.error("Magaambya NPCs journal not found!");
        return;
    }
    
    // Define the final NPCs
    const finalNPCs = [
        {
            name: "Okoro Obiyo (Uzunjati)",
            content: `<p><strong>CG | male | human | enthusiastic investigator</strong></p>
<p><strong>Branch:</strong> Uzunjati<br>
<strong>Notable Skills:</strong> Investigation, Perception, Society, Stealth<br>
<strong>Hobbies:</strong> board games, mystery novels, puzzle solving</p>
<h3>Description</h3>
<p>Okoro is an enthusiastic human who approaches everything with boundless energy and curiosity. He loves solving puzzles, playing complex board games, and investigating mysteries around campus. His enthusiasm sometimes gets him into trouble, but his genuine desire to help others usually gets him out of it.</p>
<h3>Personality</h3>
<p><strong>Most Well Known For:</strong> organizing elaborate mystery games for other students<br>
<strong>Strangest Quirk:</strong> treats every conversation like a mystery to be solved<br>
<strong>Common Associates:</strong> Chizire (gaming group), Mariama (board games), anyone who enjoys puzzles</p>
<div data-visibility="gm">
<h4>Key Character Traits</h4>
<p><strong>Enthusiastic • Curious • Analytical • Friendly • Persistent</strong></p>
<h4>Things Okoro Might Say</h4>
<ul>
<li><em>"Wait, wait, let me think about this... there's definitely a pattern here. Give me a moment to work it out!"</em></li>
<li><em>"This reminds me of a puzzle I solved last week. The key is to look at what's NOT there, not just what is."</em></li>
</ul>
<p><strong>Speech Mannerism:</strong> Speaks rapidly when excited about a new mystery or puzzle, often thinking out loud.</p>
<p><strong>Physical Mannerism:</strong> Taps his fingers in complex patterns when thinking, as if working through a puzzle.</p>
</div>
<p><strong>Friendship Bead:</strong> Bead from Okoro Obiyo</p>`
        },
        {
            name: "Tzeniwe (Emerald Bough)",
            content: `<p><strong>NG | female | anadi | nurturing bard</strong></p>
<p><strong>Branch:</strong> Emerald Bough<br>
<strong>Notable Skills:</strong> Crafting, Diplomacy, Medicine, Performance<br>
<strong>Hobbies:</strong> cooking, textile work, music, caring for others</p>
<h3>Description</h3>
<p>Strands-of-Glowing-Dawn Tzeniwe (she goes by Tzeniwe) is a nurturing anadi who seems to have adopted half the campus as her extended family. She's constantly cooking for others, mending clothes, and offering comfort to anyone who needs it. Her genuine care for others makes her beloved by students and faculty alike.</p>
<h3>Personality</h3>
<p><strong>Most Well Known For:</strong> always having fresh-baked goods to share and knowing exactly what comfort food someone needs<br>
<strong>Strangest Quirk:</strong> spins silk while thinking, creating beautiful decorative patterns<br>
<strong>Common Associates:</strong> Anchor Root (stress baking), Noxolo (fashion discussions), everyone who needs comfort</p>
<div data-visibility="gm">
<h4>Key Character Traits</h4>
<p><strong>Nurturing • Empathetic • Creative • Generous • Wise</strong></p>
<h4>Things Tzeniwe Might Say</h4>
<ul>
<li><em>"You look like you could use some tea and cookies. Come, sit down and tell me what's troubling you."</em></li>
<li><em>"Sometimes the best magic is just knowing that someone cares about you. Everything else is just technique."</em></li>
</ul>
<p><strong>Speech Mannerism:</strong> Speaks in a warm, motherly tone that makes everyone feel welcome and cared for.</p>
<p><strong>Physical Mannerism:</strong> Often has her hands busy with some craft project while talking, creating beautiful things almost unconsciously.</p>
</div>
<p><strong>Friendship Bead:</strong> Bead from Tzeniwe</p>`
        }
    ];
    
    // Add each NPC as a new page
    for (let i = 0; i < finalNPCs.length; i++) {
        const npc = finalNPCs[i];
        await npcJournal.createEmbeddedDocuments("JournalEntryPage", [{
            name: npc.name,
            type: "text",
            title: { show: true, level: 2 },
            text: {
                format: 1,
                content: npc.content
            },
            sort: (i + 8) * 100000 // Continue after previous NPCs
        }]);
        
        console.log(`Added ${npc.name}`);
    }
    
    console.log("All NPCs added successfully!");
    ui.notifications.info("All 9 student NPCs have been added to the Magaambya NPCs journal!");
}

// Run the function
addRemainingNPCs();
