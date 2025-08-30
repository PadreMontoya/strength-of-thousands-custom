/**
 * Strength of Thousands Custom Content Module Helper
 * 
 * This script provides helper functions for the module.
 */

// Module initialization
Hooks.once('ready', async function() {
    console.log('Strength of Thousands Custom Content | Module loaded successfully');
    
    // Check if this is a PF2e system
    if (game.system.id !== 'pf2e') {
        ui.notifications.warn('Strength of Thousands Custom Content | This module is designed for the Pathfinder 2e system');
        return;
    }
    
    // Notify GM about module features
    if (game.user.isGM) {
        ui.notifications.info('Strength of Thousands Custom Content | Module ready! Check the compendiums for journals and items.');
    }
});

// Helper function to award friendship beads
window.StrengthOfThousands = {
    /**
     * Award a friendship bead to a character
     * @param {string} characterName - Name of the character receiving the bead
     * @param {string} npcName - Name of the NPC giving the bead
     */
    async awardFriendshipBead(characterName, npcName) {
        if (!game.user.isGM) {
            ui.notifications.error('Only the GM can award friendship beads');
            return;
        }
        
        // Find the character
        const character = game.actors.find(a => a.name === characterName && a.type === 'character');
        if (!character) {
            ui.notifications.error(`Character "${characterName}" not found`);
            return;
        }
        
        // Find the bead item in the compendium
        const pack = game.packs.get('strength-of-thousands-custom.items');
        if (!pack) {
            ui.notifications.error('Items compendium not found');
            return;
        }
        
        const beadName = `Bead from ${npcName}`;
        const beadItem = pack.index.find(i => i.name === beadName);
        
        if (!beadItem) {
            ui.notifications.error(`Friendship bead for "${npcName}" not found`);
            return;
        }
        
        // Get the full item data
        const item = await pack.getDocument(beadItem._id);
        
        // Add to character
        await character.createEmbeddedDocuments('Item', [item.toObject()]);
        
        ui.notifications.info(`Awarded "${beadName}" to ${characterName}`);
        
        // Send chat message
        ChatMessage.create({
            content: `<div class="pf2e chat-card">
                <h3>Friendship Bead Awarded!</h3>
                <p><strong>${characterName}</strong> has received a <strong>${beadName}</strong>!</p>
                <p><em>This represents a growing friendship with ${npcName} at the Magaambya.</em></p>
            </div>`,
            speaker: ChatMessage.getSpeaker({alias: "Magaambya Academy"})
        });
    },
    
    /**
     * Quick reference for all available friendship beads
     */
    listFriendshipBeads() {
        const beads = [
            'Anchor Root', 'Chizire', 'Esi Djana', 'Haibram Thodja',
            'Ignaci Canterells', 'Mariama Keitana', 'Noxolo',
            'Okoro Obiyo', 'Tzeniwe'
        ];
        
        console.log('Available Friendship Beads:');
        beads.forEach(npc => console.log(`- Bead from ${npc}`));
        
        ui.notifications.info('Check console for list of available friendship beads');
    }
};

// Add macro for easy bead awarding
Hooks.once('ready', function() {
    if (game.user.isGM) {
        // Create a macro for awarding beads
        game.macros.getName('Award Friendship Bead') || Macro.create({
            name: 'Award Friendship Bead',
            type: 'script',
            command: `
// Award Friendship Bead Macro
const characterName = await Dialog.prompt({
    title: 'Award Friendship Bead',
    content: '<p>Enter character name:</p><input type="text" name="character" autofocus>',
    callback: (html) => html.find('[name="character"]').val()
});

if (!characterName) return;

const npcName = await Dialog.prompt({
    title: 'Award Friendship Bead',
    content: '<p>Enter NPC name:</p><input type="text" name="npc" autofocus>',
    callback: (html) => html.find('[name="npc"]').val()
});

if (!npcName) return;

StrengthOfThousands.awardFriendshipBead(characterName, npcName);
            `,
            img: 'icons/commodities/gems/bead-glass-simple.webp'
        });
    }
});
