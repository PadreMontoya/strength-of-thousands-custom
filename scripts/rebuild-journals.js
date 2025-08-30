/**
 * Script to rebuild the journals database with complete content
 * Run this in Foundry VTT console to fix missing pages and NPCs
 */

async function rebuildJournals() {
    console.log("Starting journal rebuild...");
    
    // Delete existing journals
    const existingJournals = game.journal.filter(j => 
        j.name === "Year of the Initiate" || j.name === "Magaambya NPCs"
    );
    
    for (let journal of existingJournals) {
        await journal.delete();
    }
    
    // Create Year of the Initiate with all locations
    const yearJournal = await JournalEntry.create({
        name: "Year of the Initiate",
        ownership: { default: 2 },
        pages: [
            {
                name: "Campus Overview",
                type: "text",
                title: { show: true, level: 1 },
                text: {
                    format: 1,
                    content: `<h1>Year of the Initiate</h1>
<p>Welcome to your first year at the Magaambya! As new initiates, your days will be filled with classes, studies, campus activities, and getting to know your fellow students.</p>
<h2>Campus Map</h2>
<p><em><a href="https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fv09oehslaa181.jpg">Reference the campus map</a></em></p>`
                }
            },
            {
                name: "1. Welcome Road",
                type: "text",
                title: { show: true, level: 2 },
                text: {
                    format: 1,
                    content: `<p>This bustling quad area serves as the social heart of campus where students from all branches gather between classes.</p>
<div data-visibility="gm">
<p><strong>Event:</strong> Esi Djana and Haibram Thodja are having a heated but friendly debate about magical education theory vs practice.</p>
</div>`
                }
            },
            {
                name: "2. Tree-Stump Library",
                type: "text", 
                title: { show: true, level: 2 },
                text: {
                    format: 1,
                    content: `<p>This ancient, massive tree stump has been converted into a library, though it appears to have fallen into disuse. The heavy wooden doors are secured with new-looking locks.</p>
<div data-visibility="gm">
<p><strong>GM Notes:</strong> The library is locked and will be the scene of a future adventure involving Stone Ghost's tunnels.</p>
</div>`
                }
            },
            {
                name: "3. Storage Barn",
                type: "text",
                title: { show: true, level: 2 },
                text: {
                    format: 1,
                    content: `<p>This weathered wooden barn sits at the edge of campus, used for storing supplies and equipment.</p>
<div data-visibility="gm">
<p><strong>GM Notes:</strong> The barrels have been moved and the trap door is standing open. Fresh footprints in the dust show recent passage.</p>
</div>`
                }
            },
            {
                name: "4. Archhorn Library",
                type: "text",
                title: { show: true, level: 2 },
                text: {
                    format: 1,
                    content: `<p>This impressive stone building houses one of the Magaambya's primary libraries. Students can often be found here researching assignments.</p>
<p><strong>Activities Available:</strong> Study, Cram</p>
<div data-visibility="gm">
<p><strong>Random Event:</strong> A nervous Uzunjati student named Kesi is balanced precariously on a tall ladder, trying to reach a book from a high shelf about 20 feet up.</p>
</div>`
                }
            },
            {
                name: "5. Dining Hall",
                type: "text",
                title: { show: true, level: 2 },
                text: {
                    format: 1,
                    content: `<p>The heart of campus social life, this grand hall features long wooden tables that can seat hundreds of students. The air is filled with the aroma of diverse cuisines from across the Mwangi Expanse.</p>
<div data-visibility="gm">
<p><strong>Social Event:</strong> The dining hall staff are hosting a "Mystery Cuisine Challenge" where students can volunteer to taste-test new dishes from different regions.</p>
</div>`
                }
            },
            {
                name: "6. Uzunjati Halls",
                type: "text",
                title: { show: true, level: 2 },
                text: {
                    format: 1,
                    content: `<p>The home of the Uzunjati branch, these halls are decorated with intricate storytelling murals and comfortable gathering spaces for oral traditions.</p>
<p><strong>Activities Available:</strong> Uzunjati Class, Social Events</p>
<div data-visibility="gm">
<p><strong>Class Activity:</strong> Students learn the importance of stories and are sent out to learn three secrets from others without directly asking.</p>
</div>`
                }
            },
            {
                name: "7. Tireless Hall",
                type: "text",
                title: { show: true, level: 2 },
                text: {
                    format: 1,
                    content: `<p>This grand ceremonial hall is where major academy events take place. Posters about the upcoming ceremony are prominently displayed, mentioning that parents are invited and will be in attendance.</p>
<div data-visibility="gm">
<p><strong>Event:</strong> Pick a few NPCs to be around, excited and talking to the players. Ask the players about their parents. Give one NPC a problem where they want to acquire a gift for their parent.</p>
</div>`
                }
            },
            {
                name: "8. Heron Archives",
                type: "text",
                title: { show: true, level: 2 },
                text: {
                    format: 1,
                    content: `<p>Home for Rain-Scribes students, this building is filled with natural specimens, preserved insects, and detailed field notes from generations of students.</p>
<p><strong>Activities Available:</strong> Rain-Scribes Class, Social Events</p>
<div data-visibility="gm">
<p><strong>Class Activity:</strong> Students are lectured on the importance of bugs. After class, transition into the quest "Bug Problems".</p>
</div>`
                }
            },
            {
                name: "9. Indigo Hall",
                type: "text",
                title: { show: true, level: 2 },
                text: {
                    format: 1,
                    content: `<p>The Cascade Bearers' headquarters, filled with experimental magical apparatus and innovative research projects. The air hums with magical energy from ongoing experiments.</p>
<p><strong>Activities Available:</strong> Cascade Bearers Class, Social Events</p>
<div data-visibility="gm">
<p><strong>Class Activity:</strong> Students work on innovative magical projects and spell modifications.</p>
</div>`
                }
            },
            {
                name: "10. Emerald Bough Towers",
                type: "text",
                title: { show: true, level: 2 },
                text: {
                    format: 1,
                    content: `<p>The elegant towers of the Emerald Bough branch, designed for diplomatic training and social gatherings. Comfortable meeting rooms and debate chambers fill the space.</p>
<p><strong>Activities Available:</strong> Emerald Bough Class, Social Events</p>
<div data-visibility="gm">
<p><strong>Class Activity:</strong> Students practice diplomatic negotiations and conflict resolution techniques.</p>
</div>`
                }
            },
            {
                name: "11. Tempest-Sun Spire",
                type: "text",
                title: { show: true, level: 2 },
                text: {
                    format: 1,
                    content: `<p>The training grounds and classrooms of the Tempest-Sun Mages, featuring practice areas for combat magic and physical conditioning.</p>
<p><strong>Activities Available:</strong> Tempest-Sun Class, Social Events</p>
<div data-visibility="gm">
<p><strong>Class Activity:</strong> Students practice combat techniques and protective magic.</p>
</div>`
                }
            },
            {
                name: "12. Leshy Gardens",
                type: "text",
                title: { show: true, level: 2 },
                text: {
                    format: 1,
                    content: `<p>Beautiful botanical gardens tended by friendly leshys. Students often come here to study nature magic or simply relax among the plants.</p>
<div data-visibility="gm">
<p><strong>Event:</strong> The leshys are having trouble with some overgrown plants that have gotten out of control after an experimental fertilizer mishap.</p>
</div>`
                }
            },
            {
                name: "13. Student Dormitories",
                type: "text",
                title: { show: true, level: 2 },
                text: {
                    format: 1,
                    content: `<p>Comfortable living quarters for students, organized by branch affiliation. Each dorm has common areas for studying and socializing.</p>
<div data-visibility="gm">
<p><strong>Social Event:</strong> Students are organizing study groups and social activities. Great place for character development and NPC interactions.</p>
</div>`
                }
            },
            {
                name: "14. Powderpile",
                type: "text",
                title: { show: true, level: 2 },
                text: {
                    format: 1,
                    content: `<p>The student supply store, run by Xhokan, a meticulous kobold. Shelves line the walls from floor to ceiling, filled with everything a student might need for their studies, including materials for crafting friendship beads.</p>
<div data-visibility="gm">
<p><strong>Fundraiser:</strong> A large glass jar sits on the counter for the Leshy Gardens Restoration Project raffle. Grand Prize: Wand of Entangling Flora (3rd level, 10 charges)!</p>
</div>`
                }
            }
        ]
    });
    
    console.log("Created Year of the Initiate journal with", yearJournal.pages.size, "pages");
    
    // Create Magaambya NPCs journal will be continued in next part...
    console.log("Journal rebuild phase 1 complete. Run rebuildNPCs() for NPCs.");
}

// Run the rebuild
rebuildJournals();
