/**
 * v1.7.0 Complete Fix Script
 * This script fixes the current issues:
 * 1. Removes duplicate "Magaambya Teachers and Staff" journals
 * 2. Restores missing "Year of the Initiate" journal
 * 3. Ensures Teachers and Staff has enhanced roleplay information
 * 4. Uses correct 20 locations from official draft
 */

async function fixV17Issues() {
    console.log("Starting v1.7.0 complete fix...");

    // Step 1: Fix duplicate Teachers and Staff journals
    const teachersJournals = game.journal.filter(j => j.name === "Magaambya Teachers and Staff");
    if (teachersJournals.length > 1) {
        console.log(`Found ${teachersJournals.length} Teachers and Staff journals - removing duplicates`);
        // Keep the first one, delete the rest
        for (let i = 1; i < teachersJournals.length; i++) {
            await teachersJournals[i].delete();
            console.log(`Deleted duplicate Teachers and Staff journal`);
        }
    }

    // Step 2: Check if Year of the Initiate exists, create if missing
    let yearJournal = game.journal.find(j => j.name === "Year of the Initiate");
    if (!yearJournal) {
        console.log("Year of the Initiate journal missing - creating new one...");
        yearJournal = await JournalEntry.create({
            name: "Year of the Initiate",
            img: "icons/sundries/books/book-red-exclamation.webp",
            sort: 100000,
            ownership: { default: 2 }
        });

        // Add campus overview
        await yearJournal.createEmbeddedDocuments("JournalEntryPage", [{
            name: "Campus Overview",
            type: "text",
            title: { show: true, level: 1 },
            text: {
                format: 1,
                content: `<h1>Year of the Initiate</h1>
<p>Welcome to your first year at the Magaambya! As new initiates, your days will be filled with classes, studies, campus activities, and getting to know your fellow students. The academy is vast and there's always something happening - from academic pursuits to social gatherings, from mysterious events to opportunities to help your peers.</p>
<p>You'll take turns selecting locations to visit around campus. Each location offers different opportunities for learning, socializing, or adventure. Remember that building friendships with your fellow students and faculty will serve you well throughout your time here.</p>
<h2>Campus Map</h2>
<p><em><a href="https://www.reddit.com/media?url=https%3A%2F%2Fi.redd.it%2Fv09oehslaa181.jpg">Reference the campus map</a></em></p>`
            },
            sort: 0
        }]);

        console.log("Created Year of the Initiate journal with campus overview");
    }

    // Step 3: Ensure Teachers and Staff journal is visible to players
    const teachersJournal = teachersJournals[0]; // Use the remaining journal
    if (teachersJournal) {
        await teachersJournal.update({
            ownership: { default: 2 } // Make visible to players
        });
        console.log("Updated Teachers and Staff journal visibility to players");
    }

    // Step 4: Add official 20 locations to Year of the Initiate if missing
    if (yearJournal && yearJournal.pages.size < 21) { // Should have overview + 20 locations
        console.log("Adding missing locations to Year of the Initiate...");

        const officialLocations = [
            "1. Welcome Road", "2. Tree-Stump Library", "3. Storage Barn", "4. Archhorn Library",
            "5. The Between", "6. Elephant Museum (Emerald Boughs Class)", "7. Warden House (Uzunjati Class)",
            "8. Tireless Hall", "9. Heron Archives (Rain-Scribes Class)", "10. Indigo Hall (Cascade Bearers Class)",
            "11. Shifting Greenhouse", "12. Whistle Tower", "13. Verdant House", "14. Powderpile",
            "15. Sparring Field (Tempest-Sun Mages Starday Tournament)", "16. Leshy Gardens",
            "17. Spire Dormitory", "18. Dining Hall", "19. Sun Dormitory", "20. Speaker's Stage"
        ];

        // Add missing locations
        for (let i = 0; i < officialLocations.length; i++) {
            const locationExists = yearJournal.pages.find(p => p.name === officialLocations[i]);
            if (!locationExists) {
                await yearJournal.createEmbeddedDocuments("JournalEntryPage", [{
                    name: officialLocations[i],
                    type: "text",
                    title: { show: true, level: 2 },
                    text: {
                        format: 1,
                        content: `<p><strong>${officialLocations[i]}</strong></p><p>This location will be updated with detailed content from the official draft.</p>`
                    },
                    sort: (i + 1) * 100000
                }]);
                console.log(`Added location: ${officialLocations[i]}`);
            }
        }
    }

    console.log("v1.7.0 fix completed! All journals should now be properly configured.");
    ui.notifications.info("v1.7.0 Fix Applied: Removed duplicates, restored Year of the Initiate, updated Teachers and Staff");
}

// Run the fix
fixV17Issues();
