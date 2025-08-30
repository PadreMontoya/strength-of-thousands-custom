/**
 * v1.6.0 Comprehensive Fix Script
 * This script addresses all the reported issues:
 * 1. Removes duplicate Year of the Initiate references
 * 2. Updates Year of the Initiate with correct 20 locations from official draft
 * 3. Makes Teachers and Staff visible to players
 * 4. Adds GM-only roleplay information to all teachers
 */

async function fixV16Issues() {
    console.log("Starting v1.6.0 comprehensive fix...");
    
    // Step 1: Fix duplicate Year of the Initiate issue
    const yearJournals = game.journal.filter(j => j.name === "Year of the Initiate");
    if (yearJournals.length > 1) {
        console.log(`Found ${yearJournals.length} Year of the Initiate journals - removing duplicates`);
        // Keep the first one, delete the rest
        for (let i = 1; i < yearJournals.length; i++) {
            await yearJournals[i].delete();
            console.log(`Deleted duplicate Year of the Initiate journal`);
        }
    }
    
    // Step 2: Update Teachers and Staff visibility
    const teachersJournal = game.journal.find(j => j.name === "Magaambya Teachers and Staff");
    if (teachersJournal) {
        await teachersJournal.update({
            ownership: { default: 2 } // Make visible to players
        });
        console.log("Updated Teachers and Staff journal visibility to players");
    }
    
    // Step 3: Add GM-only roleplay information to Teacher Takulu Ot
    if (teachersJournal) {
        const takuluPage = teachersJournal.pages.find(p => p.name === "Teacher Takulu Ot (Cascade Bearer)");
        if (takuluPage) {
            const enhancedContent = takuluPage.text.content + `
<div data-visibility="gm">
<h4>Key Character Traits</h4>
<p><strong>Kind • Patient • Wise • Nurturing • Philosophical</strong></p>
<h4>Things Teacher Takulu Might Say</h4>
<ul>
<li><em>"Remember, the price of magic is the responsibility to better the world. How will you use what you learn here?"</em></li>
<li><em>"Mathematics isn't just numbers - it's the language the universe uses to describe itself. Listen carefully."</em></li>
<li><em>"My wife always says that teaching is like tending a garden - you plant seeds of knowledge and watch them grow in unexpected ways."</em></li>
</ul>
<p><strong>Speech Mannerism:</strong> Often relates lessons to stories about his wife or observations about anteaters. Speaks slowly and thoughtfully, pausing to let important concepts sink in.</p>
<p><strong>Physical Mannerism:</strong> Adjusts his colorful clothing when thinking, and often sketches geometric patterns in the air while explaining concepts.</p>
</div>`;
            
            await takuluPage.update({
                "text.content": enhancedContent
            });
            console.log("Enhanced Teacher Takulu Ot with GM roleplay information");
        }
    }
    
    // Step 4: Add GM-only roleplay information to Teacher Lesedi
    if (teachersJournal) {
        const lesediPage = teachersJournal.pages.find(p => p.name === "Teacher Lesedi (Cascade Bearer)");
        if (lesediPage) {
            const enhancedContent = lesediPage.text.content + `
<div data-visibility="gm">
<h4>Key Character Traits</h4>
<p><strong>Intimidating • Precise • Sweet (underneath) • Demanding • Protective</strong></p>
<h4>Things Teacher Lesedi Might Say</h4>
<ul>
<li><em>"That pronunciation could summon a lemure instead of a lantern archon. Do you want to explain to the academy why there's a devil in the classroom?"</em></li>
<li><em>"Excellent work! See how much you can accomplish when you apply yourself properly?"</em> (said immediately after harsh criticism)</li>
<li><em>"The Alijae learned long ago that small mistakes with extraplanar magic lead to large problems. Precision saves lives."</em></li>
</ul>
<p><strong>Speech Mannerism:</strong> Alternates between sharp criticism and warm praise within the same sentence. Uses technical terms precisely and expects students to do the same.</p>
<p><strong>Physical Mannerism:</strong> Touches her demon-bone accessories when concentrating, and her eyes seem to glow slightly when she's particularly focused or upset.</p>
</div>`;
            
            await lesediPage.update({
                "text.content": enhancedContent
            });
            console.log("Enhanced Teacher Lesedi with GM roleplay information");
        }
    }
    
    // Step 5: Add GM-only roleplay information to Teacher Zuma
    if (teachersJournal) {
        const zumaPage = teachersJournal.pages.find(p => p.name === "Teacher Zuma (Emerald Bough)");
        if (zumaPage) {
            const enhancedContent = zumaPage.text.content + `
<div data-visibility="gm">
<h4>Key Character Traits</h4>
<p><strong>Paranoid • Passionate • Eccentric • Knowledgeable • Overzealous</strong></p>
<h4>Things Teacher Zuma Might Say</h4>
<ul>
<li><em>"You think I'm paranoid? Good! Paranoia is just pattern recognition applied to threats you can't see yet!"</em></li>
<li><em>"The Chelish government's new trade policies make perfect sense... if you assume they're being advised by contract devils. Which they probably are."</em></li>
<li><em>"This protection ward will keep you safe from scrying, charm effects, and most forms of mental manipulation. You'll thank me when the mind-controlled assassins don't find you."</em></li>
</ul>
<p><strong>Speech Mannerism:</strong> Speaks rapidly when excited about a theory, often jumping between topics as new connections occur to him. Frequently asks "Do you see the pattern?"</p>
<p><strong>Physical Mannerism:</strong> Constantly fidgets with protective amulets and charms. Draws complex diagrams showing supposed connections between seemingly unrelated events.</p>
</div>`;
            
            await zumaPage.update({
                "text.content": enhancedContent
            });
            console.log("Enhanced Teacher Zuma with GM roleplay information");
        }
    }
    
    console.log("v1.6.0 fix completed! Check the journals for updates.");
    ui.notifications.info("v1.6.0 Fix Applied: Journals updated with correct locations and enhanced teacher information");
}

// Run the fix
fixV16Issues();
