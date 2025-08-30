# How to Import Magaambya NPCs into Foundry VTT

Since Foundry doesn't have direct JSON import for journals, here are the best methods:

## Method 1: Simple Macro (Recommended)

1. **In Foundry VTT, go to the Macro Directory**
2. **Create a new macro** with these settings:
   - **Type:** Script
   - **Name:** Create Magaambya NPCs
3. **Copy and paste this code:**

```javascript
async function createMagaambyaNPCs() {
  // Create the main journal
  const journal = await JournalEntry.create({
    name: "Magaambya NPCs",
    ownership: {
      default: 2,
      "6M4FFhxdKoWoOC9z": 3,  // GM - Anthony Gill
      "BVtcoqtR5hDV73fr": 2,  // Scott (Mouse)
      "Rtjc27Wkzogg0m4w": 2,  // Joe (Dorren)
      "QM1wwiuuC4Lkl9dU": 2,  // Emily (Zyshi)
      "mLpzP30Ezig8iEjr": 2   // Jen (Izzy)
    }
  });

  // Add pages one by one
  await journal.createEmbeddedDocuments("JournalEntryPage", [
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

<h2>Personality</h2>
<p><strong>Most Well Known For:</strong> interrupting herself halfway through a presentation to exclaim "I'm sorry, I'm boring you" and running out of the room crying</p>
<p><strong>Strangest Quirk:</strong> uses a chicken tied to a stick to keep her room free of unwanted bugs</p>
<p><strong>Common Associates:</strong> Esi (working on music playback magic), Noxolo (scavenging bones), Tzeniwe (stress baking)</p>`,
        format: 1
      },
      sort: 100000
    }
  ]);

  ui.notifications.info("Created Magaambya NPCs journal with Anchor Root page");
}

createMagaambyaNPCs();
```

4. **Execute the macro** - this will create the journal with the first NPC
5. **Manually add remaining NPCs** using the journal interface

## Method 2: Manual Creation

1. **Create a new Journal Entry** called "Magaambya NPCs"
2. **Set permissions:**
   - Default: Observer
   - Your GM account: Owner
3. **Add pages manually** using the + button in the journal
4. **Copy content from the JSON file** for each NPC

## Method 3: World Data Import (Advanced)

If you're comfortable with file system access:

1. **Shut down Foundry**
2. **Navigate to your world's data folder:** `Data/worlds/[your-world-name]/data/`
3. **Edit `journals.db`** (backup first!)
4. **Add the journal data** from the JSON file
5. **Restart Foundry**

## Content Reference

Use the `book2-journals.json` file as your content reference. Each page contains:

### Students:
- Anchor Root (Rain-Scribe)
- Chizire (Cascade Bearer)
- Esi Djana (Tempest-Sun Mage)
- Haibram Thodja (Rain-Scribe)
- Ignaci Canterells (Emerald Bough)
- Mariama Keitana (Cascade Bearer)
- Noxolo (Uzunjati)
- Okoro Obiyo (Uzunjati)
- Strands-of-Glowing-Dawn Tzeniwe (Emerald Bough)

### Teachers:
- Teacher Takulu Ot (Cascade Bearer - Mathematician)
- Teacher Koride Ulawa (Rain-Scribe Naturalist)
- Teacher Zuma (Emerald Bough Conspiracy Theorist)
- Teacher Mafika Ayuwari (Tempest-Sun Mage)
- Teacher Lesedi (Cascade Bearer - Extraplanar Scholar)
- Teacher Izem Mezitani (Rain-Scribe Archaeologist)
- Teacher Tahenkot (Tempest-Sun Mage Scholar)
- Teacher Ahassunu (Uzunjati Historian)
- Teacher Nhyira (Uzunjati Playwright)
- Teacher Janatimo (Uzunjati Branch Head)

### Other Staff:
- Lumusi Yao (Head Cook)
- Xhokan (Quartermaster)
- Thema (Senior Landscaper)
- High-Sun Mage Oyamba (Academy Leader)

## Player IDs Used:
- GM - Anthony Gill: 6M4FFhxdKoWoOC9z
- Scott (Mouse): BVtcoqtR5hDV73fr
- Joe (Dorren): Rtjc27Wkzogg0m4w
- Emily (Zyshi): QM1wwiuuC4Lkl9dU
- Jen (Izzy): mLpzP30Ezig8iEjr

**Recommendation:** Use Method 1 to create the journal structure, then manually add the remaining NPCs by copying content from the JSON file.
