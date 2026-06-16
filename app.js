class UniformMixer {
    constructor() {
        this.state = {
            mode: 'matchup',
            matchup: {
                home: {
                    teamId: 'BAL',
                    config: { helmet: 0, jersey: 0, pants: 0, socks: 0 }
                },
                away: {
                    teamId: 'BAL',
                    config: { helmet: 0, jersey: 1, pants: 0, socks: 0 }
                }
            }
        };

        this.init();
    }

    init() {
        this.initMatchupView();
    }

    renderMannequin(container, teamId, config) {
        const team = teams[teamId];
        if (!team) return;

        // If team has local assets, render layers
        if (team.assets) {
            const layers = ['helmet', 'jersey', 'pants', 'socks'];
            container.innerHTML = layers.map(layer => {
                const assetList = team.assets[layer];
                const index = config[layer] % assetList.length;
                const fileName = assetList[index];
                return `<img src="assets/${teamId}/${fileName}" class="uniform-layer layer-${layer}" alt="${layer}">`;
            }).join('');
        } else {
            // Fallback for teams without local assets (using GUD if possible, or placeholder)
            container.innerHTML = `<div style="color:var(--text-secondary); text-align:center; padding:20px;">Assets for ${team.name} coming soon</div>`;
        }
    }

    initMatchupView() {
        // Defaults if not set
        if (!this.state.matchup.home.teamId) this.state.matchup.home.teamId = 'BAL';
        if (!this.state.matchup.away.teamId) this.state.matchup.away.teamId = 'BAL';

        const selectors = document.querySelectorAll('.matchup-team-select');
        const sortedTeams = Object.values(teams).sort((a, b) => a.name.localeCompare(b.name));

        selectors.forEach(select => {
            select.innerHTML = sortedTeams.map(t => `<option value="${t.id}" ${t.id === this.state.matchup[select.dataset.side].teamId ? 'selected' : ''}>${t.name}</option>`).join('');

            if (!select.dataset.bound) {
                select.addEventListener('change', (e) => this.updateMatchupTeam(select.dataset.side, e.target.value));
                select.dataset.bound = true;
            }
        });

        this.renderMatchup();
    }

    updateMatchupTeam(side, teamId) {
        this.state.matchup[side].teamId = teamId;
        // Apply away-specific default (2nd jersey) if side is away
        this.state.matchup[side].config = side === 'away'
            ? { helmet: 0, jersey: 1, pants: 0, socks: 0 }
            : { helmet: 0, jersey: 0, pants: 0, socks: 0 };
        this.renderMatchup();
    }

    renderMatchup() {
        const homeContainer = document.getElementById('home-mannequin');
        const awayContainer = document.getElementById('away-mannequin');
        const homeName = document.getElementById('home-team-name');
        const awayName = document.getElementById('away-team-name');

        this.renderMannequin(homeContainer, this.state.matchup.home.teamId, this.state.matchup.home.config);
        this.renderMannequin(awayContainer, this.state.matchup.away.teamId, this.state.matchup.away.config);

        if (homeName) homeName.textContent = teams[this.state.matchup.home.teamId].name;
        if (awayName) awayName.textContent = teams[this.state.matchup.away.teamId].name;

        this.renderMatchupControls('home');
        this.renderMatchupControls('away');
    }

    renderMatchupControls(side) {
        const teamId = this.state.matchup[side].teamId;
        const team = teams[teamId];
        const container = document.getElementById(`${side}-controls`);

        if (!team.assets) {
            container.innerHTML = '<p style="color:var(--text-secondary); font-size:0.8rem;">No layered assets available.</p>';
            return;
        }

        const categories = ['helmet', 'jersey', 'pants', 'socks'];

        container.innerHTML = `
            <div class="layered-controls">
                ${categories.map(cat => `
                    <div class="component-control">
                        <span class="cat-label">${cat}</span>
                        <div class="flip-buttons">
                            <button onclick="app.flipComponent('${side}', '${cat}', -1)">←</button>
                            <span class="index-label">${this.state.matchup[side].config[cat] + 1} / ${team.assets[cat].length}</span>
                            <button onclick="app.flipComponent('${side}', '${cat}', 1)">→</button>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    flipComponent(side, component, direction) {
        const teamId = this.state.matchup[side].teamId;
        const team = teams[teamId];
        const assetCount = team.assets[component].length;

        let newIndex = this.state.matchup[side].config[component] + direction;
        if (newIndex < 0) newIndex = assetCount - 1;
        if (newIndex >= assetCount) newIndex = 0;

        this.state.matchup[side].config[component] = newIndex;

        // Update specific mannequin and controls
        const container = document.getElementById(`${side}-mannequin`);
        this.renderMannequin(container, teamId, this.state.matchup[side].config);
        this.renderMatchupControls(side);
    }

    saveMatchupImage() {
        const stage = document.querySelector('.uniform-stage');
        if (!stage) return;
        
        // We use a simulated 1920x1080 window to make this 100% immune to user zoom and scroll.
        html2canvas(stage, {
            backgroundColor: '#FFFFFF',
            scale: 2, 
            windowWidth: 1920, 
            windowHeight: 1080,
            useCORS: true,
            allowTaint: true,
            onclone: (clonedDoc) => {
                const clonedStage = clonedDoc.querySelector('.uniform-stage');
                if (clonedStage) {
                    // The CSS "align-items: center" centers the DIV, but because the mannequins
                    // are pulled UP by -10cqh, the visual weight is heavily imbalanced, leaving 
                    // huge white space at the bottom.
                    // We fix this by manually reshaping the white box in the clone to tightly wrap the visual edges!
                    
                    clonedStage.style.flex = 'none';
                    clonedStage.style.boxSizing = 'border-box';
                    clonedStage.style.width = '1240px';  // 1200px content + 20px padding left/right
                    clonedStage.style.height = '860px';  // Tightly bounds the 804px tall visual content
                    
                    clonedStage.style.alignItems = 'flex-start';
                    clonedStage.style.paddingTop = '136px'; 
                    // 136px padding exactly counteracts the -108px (-10cqh) mannequin shift,
                    // leaving exactly 28px of white space on the top AND bottom. Perfect balance!
                }
            }
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = `nfl_matchup_${this.state.matchup.away.teamId}_vs_${this.state.matchup.home.teamId}.png`;
            link.href = canvas.toDataURL('image/png');
            link.click();
        }).catch(err => {
            console.error("Error generating image:", err);
            alert("Could not generate image. Error: " + (err.message || err));
        });
    }
}

// Start the app
document.addEventListener('DOMContentLoaded', () => {
    window.app = new UniformMixer();
});
