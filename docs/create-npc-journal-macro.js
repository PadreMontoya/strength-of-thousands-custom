// Macro to create Magaambya NPCs Journal
// Copy and paste this entire code into a new macro in Foundry VTT

async function createMagaambyaNPCs() {
  const journalData = {
    name: "Magaambya NPCs",
    ownership: {
      default: 2,
      "6M4FFhxdKoWoOC9z": 3,  // GM - Anthony Gill
      "BVtcoqtR5hDV73fr": 2,  // Scott (Mouse)
      "Rtjc27Wkzogg0m4w": 2,  // Joe (Dorren)
      "QM1wwiuuC4Lkl9dU": 2,  // Emily (Zyshi)
      "mLpzP30Ezig8iEjr": 2   // Jen (Izzy)
    },
    pages: [
      {
        name: "Anchor Root (Rain-Scribe)",
        type: "text",
        title: {show: true, level: 1},
        text: {
          content: `<h1>Anchor Root (Rain-Scribe)</h1>
<p><strong>N | female | ant gnoll | bonekeeper-in-training</strong></p>
<p><strong>Branch:</strong> Rain-Scribes<br>
<strong>Notable Skills:</strong> Nature, Occultism, Stealth, Survival<br>
<strong>Hobbies:</strong> sand sculptures, raising beetles, musical curation</p>

<h2>Description</h2>
<p>Anchor Root is a 3-foot-tall ant gnoll who resembles an aardwolf more than a deadly carnivore. She hails from the small Redridge clan, several weeks' travel south-west from the Magaambya. Her clan has been in decline for several decades, and Anchor Root is the only child with the potential talent to replace Redridge's aging bonekeeper.</p>
<p>Anchor Root's entire family has placed their hopes on her, leaving her in a constant state of panic. Though she has always had issues with anxiety, the expectations currently placed on her shoulders have left her devastated by even the slightest perceived flaw.</p>

<h2>Personality</h2>
<p><strong>Most Well Known For:</strong> interrupting herself halfway through a presentation to exclaim "I'm sorry, I'm boring you" and running out of the room crying</p>
<p><strong>Strangest Quirk:</strong> uses a chicken tied to a stick to keep her room free of unwanted bugs</p>
<p><strong>Common Associates:</strong> Esi (working on music playback magic), Noxolo (scavenging bones), Tzeniwe (stress baking)</p>

<h2>Role & Abilities</h2>
<p>She takes her role as bonekeeper-in-training very seriously, always looking for bones of worthy creatures that can be symbolically adopted by her clan to serve as spiritual mentors and protectors. She also has a hobby of anonymously recording music played around the city and working with other students to play it back on campus.</p>`,
          format: 1
        },
        sort: 100000
      },
      {
        name: "Chizire (Cascade Bearer)",
        type: "text",
        title: {show: true, level: 1},
        text: {
          content: `<h1>Chizire (Cascade Bearer)</h1>
<p><strong>CN | male | catfolk | slacker</strong></p>
<p><strong>Branch:</strong> Cascade Bearers<br>
<strong>Notable Skills:</strong> Crafting, Deception, Diplomacy, Nature<br>
<strong>Hobbies:</strong> brewing, engineering, finding new and exciting ways to avoid work</p>

<h2>Description</h2>
<p>Chizire spent most of his youth in Kibwe unable to read due to dyslexia. By the time a visiting scholar recognized his condition, Chizire had already embraced the role of slacker and screw-up that had been thrust upon him. Despite this, his keen ability to teach himself magic and science caught the scholar's eye.</p>

<h2>Personality</h2>
<p><strong>Most Well Known For:</strong> building a complete moonshine still in his dorm room from scrap</p>
<p><strong>Strangest Quirk:</strong> always knowing the answer when called on despite visibly not paying attention</p>
<p><strong>Common Associates:</strong> Anchor Root (brewing experimental elixirs), Mariama (brewing weird liquors), Okoro (gaming group)</p>

<h2>Role & Abilities</h2>
<p>Chizire thrives at the Magaambya, though he often uses his intelligence for disruptive jokes, complex pranks, and other hijinks. He infuriates most mentors by refusing to make anything of himself, despite clearly understanding lessons better than many peers. His ultimate goal is to enchant one of Nantambu's 10 pillar landmarks to tell bawdy jokes.</p>`,
          format: 1
        },
        sort: 200000
      },
      {
        name: "Esi Djana (Tempest-Sun Mage)",
        type: "text",
        title: {show: true, level: 1},
        text: {
          content: `<h1>Esi Djana (Tempest-Sun Mage)</h1>
<p><strong>LG | female | human | ace student</strong></p>
<p><strong>Branch:</strong> Tempest-Sun Mages<br>
<strong>Notable Skills:</strong> Arcana, Athletics, Diplomacy, Society<br>
<strong>Hobbies:</strong> university administration, campus exploration, book printing, book binding, sports, tactical wargames, fashion contests</p>

<h2>Description</h2>
<p>Every school has its star students, and Esi Djana is one of them. A Nantambu native, Esi engages the academy with an energy few can match. She can be found organizing study groups, commanding sports teams, researching foreign policy and military defense tactics, and maintaining an active social life.</p>

<h2>Personality</h2>
<p><strong>Most Well Known For:</strong> once spent 15 straight minutes reciting different synonyms for "wrong" to make a point in an argument</p>
<p><strong>Strangest Quirk:</strong> leaving baubles at magically derived coordinates for others to find</p>
<p><strong>Common Associates:</strong> Anchor Root (working on musical playback magic), Haibram and Mariama (sparring partners), Okoro (exercise partner), Tzeniwe (babysitting)</p>

<h2>Role & Abilities</h2>
<p>Esi is known for being kind, passionate, and genuine, going out of her way to approach shier or more anxious students who seem to have trouble making friends. She's determined to follow in the footsteps of famous Tempest-Sun Mages and make her mark on history.</p>`,
          format: 1
        },
        sort: 300000
      },
      // Add remaining NPCs here - this is a partial macro
      // For the complete version, you'll need to add all NPCs from the JSON file
      {
        name: "--- TEACHERS ---",
        type: "text",
        title: {show: true, level: 1},
        text: {
          content: `<h1>Teachers of the Magaambya</h1>
<p>The following are the main teachers the students interact with during their time at the academy.</p>`,
          format: 1
        },
        sort: 1000000
      },
      {
        name: "Teacher Takulu Ot (Mathematician)",
        type: "text",
        title: {show: true, level: 1},
        text: {
          content: `<h1>Teacher Takulu Ot</h1>
<p><strong>Kindly male human mathematician</strong></p>

<h2>Description</h2>
<p>A human man with colorful clothing and warm eyes, Takulu Ot is the instructor who conducts the customary interviews for new initiates. He speaks with a gentle, soothing timbre and serves as a mentor figure for many students.</p>

<h2>Teaching Style</h2>
<p>Teacher Ot is known for his kindness and patience with students. He guides them through important ceremonies like the First Masking and provides wisdom about the responsibilities that come with magical education. He emphasizes that "the price of magic is the responsibility to better the world."</p>

<h2>Role in the Academy</h2>
<p>As one of the primary instructors for new initiates, Teacher Ot handles admissions interviews, orientation, and major ceremonies. He's often the first teacher students meet and serves as their primary point of contact for academic matters.</p>

<h2>Notable Quotes</h2>
<p>"Welcome, and a kind hello, new students. You are embarking now on a life of study and service. We see within you intellect, passion, and judgment—in short, the virtues to build upon the strengths of the thousands who have come before you."</p>`,
          format: 1
        },
        sort: 1100000
      }
    ]
  };

  try {
    const journal = await JournalEntry.create(journalData);
    ui.notifications.info(`Created journal: ${journal.name} with ${journalData.pages.length} pages`);
    console.log("Journal created successfully:", journal);
  } catch (error) {
    ui.notifications.error("Failed to create journal: " + error.message);
    console.error("Error creating journal:", error);
  }
}

// Execute the function
createMagaambyaNPCs();
