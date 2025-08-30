# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.8.0] - 2025-08-30

### Fixed
- **Fixed Journal Database Structure**: Completely rebuilt journals.db to eliminate all duplicate entries
- **Restored Year of the Initiate**: Now properly includes all 20 official campus locations from the draft
- **Proper Journal Organization**: Ensured exactly 3 journals with correct content and structure
- **Foundry v13 Compatibility**: Tested and verified to work with Foundry VTT v13

### Added
- **Complete Teacher Roleplay Documentation**: All 14 faculty and staff documented in book2-Magaambya-NPCs.md
- **Roleplay Addition Script**: New script to add GM-only roleplay information to teacher journals
- **Official 20 Campus Locations**: Year of the Initiate now includes all locations from official draft

### Changed
- **Database Structure**: Rebuilt from scratch to ensure no duplicates or corruption
- **Documentation First**: All roleplay information documented in markdown before Foundry implementation
- **Simplified Fix Process**: Single script to add missing roleplay information

### Technical
- Fixed malformed JSON in journals.db that was causing import issues
- Removed duplicate journal entries that were confusing the compendium
- Proper data-visibility tags for GM-only content
- Enhanced error handling in fix scripts

## [1.7.0] - 2025-08-30

### Fixed
- **Removed Duplicate Teachers and Staff Journals**: Fixed issue where "Magaambya Teachers and Staff" appeared twice
- **Restored Missing Year of the Initiate**: Fixed issue where Year of the Initiate journal vanished
- **Complete Teacher Roleplay Information**: All faculty now have comprehensive GM-only roleplay sections
- **Proper Journal Structure**: Ensured correct number and organization of all journals

### Added
- **Complete Teacher Roleplay Documentation**: Added to book2-Magaambya-NPCs.md for all 10 teachers and 4 staff members
- **Enhanced GM Information**: Each teacher now includes Key Character Traits, Things They Might Say, Speech Mannerisms, and Physical Mannerisms
- **Comprehensive Fix Script**: v1.7.0 script addresses all current journal issues

### Changed
- **Documentation First Approach**: All roleplay information documented in markdown before implementation
- **Improved Fix Scripts**: More robust handling of duplicate journals and missing content
- **Better Error Recovery**: Scripts now properly restore missing journals instead of just fixing existing ones

### Technical
- Enhanced fix script handles edge cases where journals are completely missing
- Improved duplicate detection and removal logic
- Better integration between documentation and Foundry implementation
- Proper ownership settings for all journal types

## [1.6.0] - 2025-08-30

### Fixed
- **Removed Duplicate Year of the Initiate**: Fixed issue where journal appeared twice in the database
- **Correct Campus Locations**: Updated Year of the Initiate to use the official 20 locations from book2-year-of-the-initiate-draft.md
- **Teachers and Staff Visibility**: Changed Teachers and Staff journal to be visible to players (with GM-only roleplay sections)
- **Enhanced Faculty Roleplay**: Added Key Character Traits, speech patterns, and physical mannerisms for all teachers (GM-only sections)

### Changed
- **Official Location Names**: Updated to match the exact 20 locations from the official draft:
  1. Welcome Road, 2. Tree-Stump Library, 3. Storage Barn, 4. Archhorn Library, 5. The Between
  6. Elephant Museum (Emerald Boughs Class), 7. Warden House (Uzunjati Class), 8. Tireless Hall
  9. Heron Archives (Rain-Scribes Class), 10. Indigo Hall (Cascade Bearers Class), 11. Shifting Greenhouse
  12. Whistle Tower, 13. Verdant House, 14. Powderpile, 15. Sparring Field (Tempest-Sun Mages Starday Tournament)
  16. Leshy Gardens, 17. Spire Dormitory, 18. Dining Hall, 19. Sun Dormitory, 20. Speaker's Stage
- **Faculty Information**: Enhanced all teacher descriptions with detailed roleplay guidance for GMs
- **Journal Organization**: Improved structure to eliminate duplicate content and ensure proper visibility

### Added
- **GM Roleplay Sections**: Each teacher now includes Key Character Traits, Things They Might Say, Speech Mannerisms, and Physical Mannerisms
- **Official Location Content**: Detailed descriptions and activities for all 20 official campus locations
- **Branch-Specific Classes**: Proper class locations and requirements for each magical branch

### Technical
- Fixed database structure to prevent duplicate journal entries
- Improved ownership settings for proper content visibility
- Enhanced GM-only content organization with proper data-visibility tags

## [1.5.0] - 2025-08-30

### Added
- **New Journal: Magaambya Teachers and Staff** - Complete GM-only journal with all faculty and staff NPCs
- **All Faculty Members**: 10 detailed teacher profiles with teaching styles, personalities, and expertise
  - Teacher Takulu Ot (Cascade Bearer - Mathematician)
  - Teacher Lesedi (Cascade Bearer - Extraplanar Scholar)
  - Teacher Zuma (Emerald Bough - Conspiracy Theorist)
  - Teacher Koride Ulawa (Rain-Scribe - Naturalist)
  - Teacher Izem Mezitani (Rain-Scribe - Archaeologist)
  - Teacher Mafika Ayuwari (Tempest-Sun - Martial Artist)
  - Teacher Tahenkot (Tempest-Sun - Scholar)
  - Teacher Ahassunu (Uzunjati - Historian)
  - Teacher Nhyira (Uzunjati - Playwright)
  - Teacher Janatimo (Uzunjati Branch Head)
- **Academy Leadership and Staff**: High-Sun Mage Oyamba, Lumusi Yao, Xhokan, Thema
- **GM-Only Content**: Journal is set to GM-only visibility for proper campaign management

### Changed
- Enhanced journals database with comprehensive faculty information
- Improved organization of NPC content for easier GM reference
- Added detailed teaching styles and personality traits for all faculty

### Technical
- New journal entry properly integrated into existing database structure
- GM-only ownership settings ensure appropriate content visibility
- Consistent formatting and organization across all journal entries

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
