# Strength of Thousands Custom Content Module - Summary

## Module Structure

```
Strength of Thousands PF2E/Foundry/
├── module.json                 # Module manifest
├── README.md                   # Installation and usage guide
├── LICENSE                     # MIT License with Paizo acknowledgment
├── CHANGELOG.md               # Version history
├── MODULE_SUMMARY.md          # This file
├── scripts/
│   └── module-helper.js       # Helper functions and macros
└── packs/
    ├── journals.db            # Journal entries compendium
    └── items.db              # Items compendium
```

## Content Overview

### Journals (2 entries)
1. **Year of the Initiate**
   - Campus overview and exploration guide
   - 20+ campus locations with player and GM content
   - Hidden GM events and encounters

2. **Magaambya NPCs**
   - Student NPC overview
   - Detailed pages for 9 major student NPCs
   - Player-visible and GM-only information

### Items (12 entries)
1. **Friendship Beads (9 items)**
   - Anchor Root (Rain-Scribe)
   - Chizire (Cascade Bearer)
   - Esi Djana (Tempest-Sun Mage)
   - Haibram Thodja (Rain-Scribe)
   - Ignaci Canterells (Emerald Bough)
   - Mariama Keitana (Cascade Bearer)
   - Noxolo (Uzunjati)
   - Okoro Obiyo (Uzunjati)
   - Tzeniwe (Emerald Bough)

2. **Generic Beads (3 items)**
   - Generic Friendship Bead
   - Dining Hall Bead
   - Powderpile Bead

## Features

### For Game Masters
- **Hidden Content**: GM-only information properly hidden using Foundry's visibility system
- **Roleplay Support**: Detailed character traits, speech patterns, and mannerisms
- **Event Management**: Pre-written campus events and encounters
- **Helper Functions**: JavaScript functions for awarding beads and managing content
- **Macro Support**: Automatic macro creation for common tasks

### For Players
- **Campus Guide**: Comprehensive location descriptions for exploration
- **NPC Information**: Character backgrounds, personalities, and interests
- **Friendship System**: Mechanical benefits from building relationships
- **Study Bonuses**: Stackable bonuses for magical branch subjects

## Technical Details

### Compatibility
- **Foundry VTT**: v11+ (Verified for v12)
- **System**: Pathfinder 2e v5.0.0+
- **Dependencies**: None (standalone module)

### Permissions
- **Default**: Observer (players can view)
- **GM**: Owner (full access)
- **Items**: GM-only ownership for controlled distribution

### Data Format
- **Journals**: Standard Foundry journal entries with HTML content
- **Items**: PF2e equipment items with custom descriptions
- **Visibility**: Uses `data-visibility="gm"` for hidden content

## Installation Methods

### Method 1: Manual Installation
1. Download module files
2. Extract to `Data/modules/strength-of-thousands-custom/`
3. Restart Foundry VTT
4. Enable in world settings

### Method 2: Manifest URL
```
https://github.com/PadreMontoya/strength-of-thousands-custom/releases/latest/download/module.json
```

## Usage Examples

### Awarding Friendship Beads
```javascript
// Using the helper function
StrengthOfThousands.awardFriendshipBead("Character Name", "NPC Name");

// Using the auto-created macro
// Run "Award Friendship Bead" macro from hotbar
```

### Viewing Available Beads
```javascript
StrengthOfThousands.listFriendshipBeads();
```

## Content Guidelines

### Player-Visible Information
- Character basics (race, class, branch)
- Personality traits and quirks
- Hobbies and interests
- General descriptions
- Friendship bead benefits

### GM-Only Information
- Detailed character traits for roleplay
- Speech patterns and mannerisms
- Physical mannerisms
- Role and abilities in the story
- Event details and encounters

## Future Enhancements

Potential additions for future versions:
- Additional campus NPCs
- More campus locations
- Faculty member details
- Advanced friendship mechanics
- Integration with other Strength of Thousands content

## Support and Contributions

- **Repository**: https://github.com/PadreMontoya/strength-of-thousands-custom
- **Issues**: Use GitHub issues for bug reports
- **Contributions**: Pull requests welcome
- **License**: MIT with Paizo Community Use compliance
