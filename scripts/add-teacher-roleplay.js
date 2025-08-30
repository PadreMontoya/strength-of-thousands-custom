/**
 * Add Roleplay Information to Teachers
 * This script adds GM-only roleplay information to all teacher pages
 * in the "Magaambya Teachers and Staff" journal.
 */

async function addTeacherRoleplayInfo() {
    console.log("Adding roleplay information to teachers...");
    
    // Find the Teachers and Staff journal
    const teachersJournal = game.journal.find(j => j.name === "Magaambya Teachers and Staff");
    if (!teachersJournal) {
        ui.notifications.error("Could not find 'Magaambya Teachers and Staff' journal");
        return;
    }
    
    // Teacher Takulu Ot
    const takuluPage = teachersJournal.pages.find(p => p.name === "Teacher Takulu Ot (Cascade Bearer)");
    if (takuluPage) {
        const roleplayInfo = `
<div data-visibility="gm">
<h4>Roleplay Information (GM Only)</h4>
<p><strong>Key Character Traits:</strong> Kind • Patient • Wise • Nurturing • Philosophical</p>
<h4>Things Teacher Takulu Might Say</h4>
<ul>
<li><em>"Remember, the price of magic is the responsibility to better the world. How will you use what you learn here?"</em></li>
<li><em>"Mathematics isn't just numbers - it's the language the universe uses to describe itself. Listen carefully."</em></li>
<li><em>"My wife always says that teaching is like tending a garden - you plant seeds of knowledge and watch them grow in unexpected ways."</em></li>
<li><em>"You know, anteaters are fascinating creatures. They're so specialized, yet so perfectly adapted to their role. Much like how each of you will find your own perfect role in the world."</em></li>
</ul>
<p><strong>Speech Mannerism:</strong> Often relates lessons to stories about his wife or observations about anteaters. Speaks slowly and thoughtfully, pausing to let important concepts sink in. Uses gentle questions to guide students to discoveries rather than lecturing directly.</p>
<p><strong>Physical Mannerism:</strong> Adjusts his colorful clothing when thinking, and often sketches geometric patterns in the air while explaining concepts. Has a habit of touching his heart when speaking about his wife or students he cares about.</p>
</div>`;
        
        await takuluPage.update({
            "text.content": takuluPage.text.content + roleplayInfo
        });
        console.log("Enhanced Teacher Takulu Ot");
    }
    
    // Teacher Lesedi
    const lesediPage = teachersJournal.pages.find(p => p.name === "Teacher Lesedi (Cascade Bearer)");
    if (lesediPage) {
        const roleplayInfo = `
<div data-visibility="gm">
<h4>Roleplay Information (GM Only)</h4>
<p><strong>Key Character Traits:</strong> Intimidating • Precise • Sweet (underneath) • Demanding • Protective</p>
<h4>Things Teacher Lesedi Might Say</h4>
<ul>
<li><em>"That pronunciation could summon a lemure instead of a lantern archon. Do you want to explain to the academy why there's a devil in the classroom?"</em></li>
<li><em>"Excellent work! See how much you can accomplish when you apply yourself properly?"</em> (said immediately after harsh criticism)</li>
<li><em>"The Alijae learned long ago that small mistakes with extraplanar magic lead to large problems. Precision saves lives."</em></li>
<li><em>"I sense mischief brewing. Would you care to share your plans with the class, or shall I divine them myself?"</em></li>
</ul>
<p><strong>Speech Mannerism:</strong> Alternates between sharp criticism and warm praise within the same sentence. Uses technical terms precisely and expects students to do the same. Has an uncanny ability to know what students are thinking or planning.</p>
<p><strong>Physical Mannerism:</strong> Touches her demon-bone accessories when concentrating, and her eyes seem to glow slightly when she's particularly focused or upset. Stands very straight and still when lecturing, but moves with fluid grace when demonstrating magic.</p>
</div>`;
        
        await lesediPage.update({
            "text.content": lesediPage.text.content + roleplayInfo
        });
        console.log("Enhanced Teacher Lesedi");
    }
    
    // Teacher Zuma
    const zumaPage = teachersJournal.pages.find(p => p.name === "Teacher Zuma (Emerald Bough)");
    if (zumaPage) {
        const roleplayInfo = `
<div data-visibility="gm">
<h4>Roleplay Information (GM Only)</h4>
<p><strong>Key Character Traits:</strong> Paranoid • Passionate • Eccentric • Knowledgeable • Overzealous</p>
<h4>Things Teacher Zuma Might Say</h4>
<ul>
<li><em>"You think I'm paranoid? Good! Paranoia is just pattern recognition applied to threats you can't see yet!"</em></li>
<li><em>"The Chelish government's new trade policies make perfect sense... if you assume they're being advised by contract devils. Which they probably are."</em></li>
<li><em>"This protection ward will keep you safe from scrying, charm effects, and most forms of mental manipulation. You'll thank me when the mind-controlled assassins don't find you."</em></li>
<li><em>"Do you see the pattern? No? Look closer - it's all connected!"</em></li>
</ul>
<p><strong>Speech Mannerism:</strong> Speaks rapidly when excited about a theory, often jumping between topics as new connections occur to him. Frequently asks "Do you see the pattern?" and assumes everyone shares his level of paranoia.</p>
<p><strong>Physical Mannerism:</strong> Constantly fidgets with protective amulets and charms. Draws complex diagrams showing supposed connections between seemingly unrelated events. Looks over his shoulder frequently and whispers when discussing "sensitive" topics.</p>
</div>`;
        
        await zumaPage.update({
            "text.content": zumaPage.text.content + roleplayInfo
        });
        console.log("Enhanced Teacher Zuma");
    }
    
    console.log("Roleplay information added to all teachers!");
    ui.notifications.info("Teacher roleplay information has been added successfully!");
}

// Run the script
addTeacherRoleplayInfo();
