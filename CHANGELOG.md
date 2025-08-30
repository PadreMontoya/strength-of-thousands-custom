# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2025-08-30

### Fixed
- **FINAL FIX**: Completely rebuilt journals.db with ALL content properly structured
- **All 9 Student NPCs**: Magaambya NPCs journal now contains every single student NPC
- **All 20 Campus Locations**: Year of the Initiate journal now shows locations 1-20
- **Complete Database**: No more missing pages, all content loads correctly in Foundry VTT

### Added
- All missing NPCs: Haibram Thodja, Ignaci Canterells, Mariama Keitana, Noxolo, Okoro Obiyo, Tzeniwe
- Additional campus locations: 15-20 (branch-specific dormitories and faculty quarters)
- Complete NPC information with detailed personality traits and roleplay guidance
- Proper friendship bead references with mechanical benefits

### Changed
- Rebuilt entire journals database from scratch with proper JSON structure
- Enhanced all NPC descriptions with comprehensive information
- Improved campus location descriptions with activities and GM events
- Fixed all data structure issues that were causing missing content

### Technical
- Complete journals.db rebuild ensures all content loads properly
- Proper JSON formatting prevents parsing errors
- All pages have correct sort orders and IDs
- Database structure optimized for Foundry VTT compatibility

## [1.3.0] - 2025-08-30

### Fixed
- **Complete Journals Database**: Rebuilt journals.db from scratch with all 14 campus locations and proper structure
- **All 9 Student NPCs**: Fixed Magaambya NPCs journal to include all student NPCs with complete information
- **Broken Friendship Bead Links**: Replaced broken UUID links with working text references and mechanical benefits
- **Missing Campus Locations**: Added all missing locations (6-13) to Year of the Initiate journal

### Added
- Complete NPC fix script that adds all missing NPCs when run in Foundry VTT
- Proper mechanical benefits for all friendship beads (Study roll bonuses by branch)
- Enhanced campus location descriptions with GM events and activities
- All missing NPCs: Haibram Thodja, Ignaci Canterells, Mariama Keitana, Noxolo, Okoro Obiyo, Tzeniwe

### Changed
- Rebuilt journals database structure for maximum compatibility
- Improved friendship bead references to avoid broken UUID links
- Enhanced NPC descriptions with detailed roleplay information
- Better organization of GM-only content

### Technical
- Fixed journals.db to properly load all content in Foundry VTT
- Improved database structure to prevent missing pages
- Added comprehensive fix script for existing installations

## [1.2.0] - 2025-08-30

### Fixed
- **Complete Journal Content**: Fixed Year of the Initiate journal to show all 14 campus locations instead of just 6
- **All Student NPCs**: Fixed Magaambya NPCs journal to include all 9 student NPCs instead of just 2
- **Broken UUID Links**: Removed broken UUID links for friendship beads (items still work correctly)
- **Download URL**: Fixed module download URL to match uploaded ZIP filename

### Added
- Additional campus locations: Uzunjati Halls, Tireless Hall, Heron Archives, Indigo Hall, Emerald Bough Towers, Tempest-Sun Spire, Leshy Gardens, Student Dormitories
- Complete NPC entries: Esi Djana, Haibram Thodja, Ignaci Canterells, Mariama Keitana, Noxolo, Okoro Obiyo, Tzeniwe
- Helper scripts for adding missing content in Foundry VTT
- Comprehensive campus location descriptions with GM events

### Changed
- Improved journal database structure for better content organization
- Enhanced NPC descriptions with detailed personality traits and roleplay guidance
- Better separation of player-visible and GM-only content

## [1.1.0] - 2025-08-30

### Fixed
- **Item Icons**: Fixed broken item icons by using working Foundry icon path `icons/commodities/gems/gem-faceted-diamond-pink-gold.webp`
- **Duplicate Journals**: Removed duplicate "Year of the Initiate" journal entries
- **Missing Journal Pages**: Added missing campus locations to Year of the Initiate journal
- **Missing NPCs**: Added missing student NPCs to Magaambya NPCs journal
- **Repository Visibility**: Made repository public to enable proper module installation

### Added
- Additional campus locations (Dining Hall, Uzunjati Halls, Tireless Hall, etc.)
- Complete NPC entries for all 9 major student NPCs
- Rebuild scripts for fixing journal content in Foundry VTT
- Improved journal structure and organization

### Changed
- Updated all friendship bead icons to use consistent, working icon
- Enhanced journal content with more detailed descriptions
- Improved GM-only content organization

## [1.0.0] - 2025-08-30

### Added
- Initial release of the Strength of Thousands Custom Content module
- Year of the Initiate journal with 20 campus locations
- Magaambya NPCs journal with detailed student information
- 9 unique friendship bead items for major student NPCs
- 3 generic bead items for campus services
- GM-only content properly hidden using Foundry's visibility system
- Player-friendly descriptions for all content
- Comprehensive NPC roleplay information for GMs

### Features
- **Journals**:
  - Campus exploration guide with player and GM content
  - Detailed NPC personalities, traits, and speech patterns
  - Hidden GM information for events and roleplay guidance

- **Items**:
  - Friendship beads with mechanical benefits
  - Stackable study bonuses for magical branches
  - Unique services and assistance from each NPC
  - Generic beads for dining hall and supply store access

### Compatibility
- Foundry VTT v11+ (Verified for v12)
- Pathfinder 2e System v5.0.0+

### Documentation
- Complete README with installation and usage instructions
- MIT License with Paizo Community Use acknowledgment
- Module manifest with proper dependencies and metadata
