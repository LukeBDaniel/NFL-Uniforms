
// Mock data for teams and GUD uniform codes (2025 Season)
window.teams = {
    DAL: {
        id: 'DAL',
        name: 'Dallas Cowboys',
        combinations: [
            { code: 'A', name: 'Home (White)' },
            { code: 'B', name: 'Away (Navy)' },
            { code: 'C', name: 'Color Rush / Alt' }
        ],
        assets: {
            helmet: ['DAL_helmet_1.png', 'DAL_helmet_2.png', 'DAL_helmet_3.png', 'DAL_helmet_4.png'],
            jersey: ['DAL_jersey_1.png', 'DAL_jersey_2.png', 'DAL_jersey_3.png', 'DAL_jersey_4.png'],
            pants: ['DAL_pants_1.png', 'DAL_pants_2.png', 'DAL_pants_3.png', 'DAL_pants_4.png'],
            socks: ['DAL_socks_1.png', 'DAL_socks_2.png', 'DAL_socks_3.png', 'DAL_socks_4.png']
        }
    },
    NYG: {
        id: 'NYG',
        name: 'New York Giants',
        combinations: [
            { code: 'A', name: 'Home (Blue)' },
            { code: 'B', name: 'Away (White)' },
            { code: 'C', name: 'Alternate (Century Red)' }
        ],
        assets: {
            helmet: ['NYG_helmet_1.png', 'NYG_helmet_2.png'],
            jersey: ['NYG_jersey_1.png', 'NYG_jersey_2.png', 'NYG_jersey_3.png', 'NYG_jersey_4.png'],
            pants: ['NYG_pants_1.png', 'NYG_pants_2.png', 'NYG_pants_3.png'],
            socks: ['NYG_socks_1.png', 'NYG_socks_2.png', 'NYG_socks_3.png', 'NYG_socks_4.png']
        }
    },

    GB: {
        id: 'GB',
        name: 'Green Bay Packers',
        combinations: [
            { code: 'A', name: 'Home (Green)' },
            { code: 'B', name: 'Away (White)' },
            { code: 'C', name: 'Alternate (50s Classic)' }
        ],
        assets: {
            helmet: ['GB_helmet_1.png', 'GB_helmet_2.png', 'GB_helmet_3.png'],
            jersey: ['GB_jersey_1.png', 'GB_jersey_2.png', 'GB_jersey_3.png'],
            pants: ['GB_pants_1.png', 'GB_pants_2.png', 'GB_pants_3.png'],
            socks: ['GB_socks_1.png', 'GB_socks_2.png', 'GB_socks_3.png']
        }
    },
    KC: {
        id: 'KC',
        name: 'Kansas City Chiefs',
        combinations: [
            { code: 'A', name: 'Home (Red)' },
            { code: 'B', name: 'Away (White)' }
        ],
        assets: {
            helmet: ['KC_helmet_1.png'],
            jersey: ['KC_jersey_1.png', 'KC_jersey_2.png'],
            pants: ['KC_pants_1.png', 'JC_pants_2.png'],
            socks: ['KC_socks_1.png', 'KC_socks_2.png']
        }
    },

    BAL: {
        id: 'BAL',
        name: 'Baltimore Ravens',
        combinations: [
            { code: 'A', name: 'Home (Purple)' },
            { code: 'B', name: 'Away (White)' },
            { code: 'C', name: 'Alternate (Black)' }
        ],
        assets: {
            helmet: ['BAL_helmet_1.png', 'BAL_helmet_2.png'],
            jersey: ['BAL_jersey_1.png', 'BAL_jersey_2.png', 'BAL_jersey_3.png', 'BAL_jersey_4.png'],
            pants: ['BAL_pants_1.png', 'BAL_pants_2.png', 'BAL_pants_3.png', 'BAL_pants_4.png'],
            socks: ['BAL_socks_1.png', 'BAL_socks_2.png', 'BAL_socks_3.png']
        }
    },
    ARZ: {
        id: 'ARZ',
        name: 'Arizona Cardinals',
        combinations: [
            { code: 'A', name: 'Home (Red)' },
            { code: 'B', name: 'Away (White)' },
            { code: 'C', name: 'Alternate (Black)' }
        ],
        assets: {
            helmet: ['ARZ_helmet_1.png', 'ARZ_helmet_2.png', 'ARZ_helmet_3.png'],
            jersey: ['ARZ_jersey_1.png', 'ARZ_jersey_2.png', 'ARZ_jersey_3.png', 'ARZ_jersey_4.png'],
            pants: ['ARZ_pants_1.png', 'ARZ_pants_2.png', 'ARZ_pants_3.png', 'ARZ_pants_4.png'],
            socks: ['ARZ_socks_1.png', 'ARZ_socks_2.png', 'ARZ_socks_3.png']
        }
    },
    ATL: {
        id: 'ATL',
        name: 'Atlanta Falcons',
        combinations: [
            { code: 'A', name: 'Home (Black)' },
            { code: 'B', name: 'Away (White)' },
            { code: 'C', name: 'Alternate (Red)' }
        ],
        assets: {
            helmet: ['ATL_helmet_1.png', 'ATL_helmet_2.png'],
            jersey: ['ATL_jersey_1.png', 'ATL_jersey_2.png', 'ATL_jersey_3.png'],
            pants: ['ATL_pants_1.png', 'ATL_pants_2.png', 'ATL_pants_3.png'],
            socks: ['ATL_socks_1.png', 'ATL_socks_2.png', 'ATL_socks_3.png']
        }
    },
    BUF: {
        id: 'BUF',
        name: 'Buffalo Bills',
        combinations: [
            { code: 'A', name: 'Home (Blue)' },
            { code: 'B', name: 'Away (White)' },
            { code: 'C', name: 'Color Rush (Red)' }
        ],
        assets: {
            helmet: ['BUF_helmet_1.png', 'BUF_helmet_2.png', 'BUF_helmet_3.png', 'BUF_helmet_4.png'],
            jersey: ['BUF_jersey_1.png', 'BUF_jersey_2.png', 'BUF_jersey_3.png', 'BUF_jersey_4.png', 'BUF_jersey_5.png'],
            pants: ['BUF_pants_1.png', 'BUF_pants_2.png', 'BUF_pants_3.png', 'BUF_pants_4.png'],
            socks: ['BUF_socks_1.png', 'BUF_socks_2.png', 'BUF_socks_3.png']
        }
    },
    CAR: {
        id: 'CAR',
        name: 'Carolina Panthers',
        combinations: [
            { code: 'A', name: 'Home (Black)' },
            { code: 'B', name: 'Away (White)' },
            { code: 'C', name: 'Alternate (Blue)' }
        ],
        assets: {
            helmet: ['CAR_helmet_1.png', 'CAR_helmet_2.png'],
            jersey: ['CAR_jersey_1.png', 'CAR_jersey_2.png', 'CAR_jersey_3.png'],
            pants: ['CAR_pants_1.png', 'CAR_pants_2.png', 'CAR_pants_3.png', 'CAR_pants_4.png'],
            socks: ['CAR_socks_1.png', 'CAR_socks_2.png', 'CAR_socks_3.png']
        }
    },
    CHI: {
        id: 'CHI',
        name: 'Chicago Bears',
        combinations: [
            { code: 'A', name: 'Home (Navy)' },
            { code: 'B', name: 'Away (White)' },
            { code: 'C', name: 'Alternate (Orange)' }
        ],
        assets: {
            helmet: ['CHI_helmet_1.png', 'CHI_helmet_2.png', 'CHI_helmet_3.png'],
            jersey: ['CHI_jersey_1.png', 'CHI_jersey_2.png', 'CHI_jersey_3.png', 'CHI_jersey_4.png'],
            pants: ['CHI_pants_1.png', 'CHI_pants_2.png', 'CHI_pants_3.png'],
            socks: ['CHI_socks_1.png', 'CHI_socks_2.png', 'CHI_socks_3.png', 'CHI_socks_4.png']
        }
    },
    CIN: {
        id: 'CIN',
        name: 'Cincinnati Bengals',
        combinations: [
            { code: 'A', name: 'Home (Black)' },
            { code: 'B', name: 'Away (White)' },
            { code: 'C', name: 'Alternate (Orange)' }
        ],
        assets: {
            helmet: ['CIN_helmet_1.png', 'CIN_helmet_2.png'],
            jersey: ['CIN_jersey_1.png', 'CIN_jersey_2.png', 'CIN_jersey_3.png'],
            pants: ['CIN_pants_1.png', 'CIN_pants_2.png', 'CIN_pants_3.png'],
            socks: ['CIN_socks_1.png', 'CIN_socks_2.png', 'CIN_socks_3.png']
        }
    },
    CLE: {
        id: 'CLE',
        name: 'Cleveland Browns',
        combinations: [
            { code: 'A', name: 'Home (Brown)' },
            { code: 'B', name: 'Away (White)' },
            { code: 'C', name: 'Alternate (White Shell)' }
        ],
        assets: {
            helmet: ['CLE_helmet_1.png', 'CLE_helmet_2.png', 'CLE_helmet_3.png'],
            jersey: ['CLE_jersey_1.png', 'CLE_jersey_2.png', 'CLE_jersey_3.png'],
            pants: ['CLE_pants_1.png', 'CLE_pants_2.png', 'CLE_pants_3.png'],
            socks: ['CLE_socks_1.png', 'CLE_socks_2.png', 'CLE_socks_3.png']
        }
    },
    DEN: {
        id: 'DEN',
        name: 'Denver Broncos',
        combinations: [
            { code: 'A', name: 'Home (Orange)' },
            { code: 'B', name: 'Away (White)' },
            { code: 'C', name: 'Alternate (Blue)' }
        ],
        assets: {
            helmet: ['DEN_helmet_1.png', 'DEN_helmet_2.png', 'DEN_helmet_3.png'],
            jersey: ['DEN_jersey_1.png', 'DEN_jersey_2.png', 'DEN_jersey_3.png', 'DEN_jersey_4.png'],
            pants: ['DEN_pants_1.png', 'DEN_pants_2.png', 'DEN_pants_3.png', 'DEN_pants_4.png'],
            socks: ['DEN_socks_1.png', 'DEN_socks_2.png', 'DEN_socks_3.png', 'DEN_socks_4.png']
        }
    },
    DET: {
        id: 'DET',
        name: 'Detroit Lions',
        combinations: [
            { code: 'A', name: 'Home (Honolulu Blue)' },
            { code: 'B', name: 'Away (White)' },
            { code: 'C', name: 'Alternate (Black)' }
        ],
        assets: {
            helmet: ['DET_helmet_1.png', 'DET_helmet_2.png', 'DET_helmet_3.png'],
            jersey: ['DET_jersey_1.png', 'DET_jersey_2.png', 'DET_jersey_3.png', 'DET_jersey_4.png'],
            pants: ['DET_pants_1.png', 'DET_pants_2.png', 'DET_pants_3.png', 'DET_pants_4.png', 'DET_pants_5.png'],
            socks: ['DET_socks_1.png', 'DET_socks_2.png', 'DET_socks_3.png']
        }
    },
    HOU: {
        id: 'HOU',
        name: 'Houston Texans',
        combinations: [
            { code: 'A', name: 'Home (Deep Steel Blue)' },
            { code: 'B', name: 'Away (Liberty White)' },
            { code: 'C', name: 'Alternate (H-Town Blue)' }
        ],
        assets: {
            helmet: ['HOU_helmet_1.png', 'HOU_helmet_2.png', 'HOU_helmet_3.png'],
            jersey: ['HOU_jersey_1.png', 'HOU_jersey_2.png', 'HOU_jersey_3.png', 'HOU_jersey_4.png'],
            pants: ['HOU_pants_1.png', 'HOU_pants_2.png', 'HOU_pants_3.png', 'HOU_pants_4.png'],
            socks: ['HOU_socks_1.png', 'HOU_socks_2.png', 'HOU_socks_3.png']
        }
    },
    IND: {
        id: 'IND',
        name: 'Indianapolis Colts',
        combinations: [
            { code: 'A', name: 'Home (Blue)' },
            { code: 'B', name: 'Away (White)' }
        ],
        assets: {
            helmet: ['IND_helmet_1.png', 'IND_helmet_2.png'],
            jersey: ['IND_jersey_1.png', 'IND_jersey_2.png', 'IND_jersey_3.png'],
            pants: ['IND_pants_1.png', 'IND_pants_2.png'],
            socks: ['IND_socks_1.png', 'IND_socks_2.png']
        }
    },
    JAX: {
        id: 'JAX',
        name: 'Jacksonville Jaguars',
        combinations: [
            { code: 'A', name: 'Home (Teal)' },
            { code: 'B', name: 'Away (White)' },
            { code: 'C', name: 'Alternate (Black)' }
        ],
        assets: {
            helmet: ['JAX_helmet_1.png', 'JAX_helmet_2.png'],
            jersey: ['JAX_jersey_1.png', 'JAX_jersey_2.png', 'JAX_jersey_3.png'],
            pants: ['JAX_pants_1.png', 'JAX_pants_2.png', 'JAX_pants_3.png', 'JAX_pants_4.png'],
            socks: ['JAX_socks_1.png', 'JAX_socks_2.png', 'JAX_socks_3.png']
        }
    },
    LAC: {
        id: 'LAC',
        name: 'Los Angeles Chargers',
        combinations: [
            { code: 'A', name: 'Home (Powder Blue)' },
            { code: 'B', name: 'Away (White)' },
            { code: 'C', name: 'Alternate (Royal Blue)' }
        ],
        assets: {
            helmet: ['LAC_helmet_1.png', 'LAC_helmet_2.png'],
            jersey: ['LAC_jersey_1.png', 'LAC_jersey_2.png', 'LAC_jersey_3.png', 'LAC_jersey_4.png'],
            pants: ['LAC_pants_1.png', 'LAC_pants_2.png', 'LAC_pants_3.png', 'LAC_pants_4.png', 'LAC_pants_5.png'],
            socks: ['LAC_socks_1.png', 'LAC_socks_2.png', 'LAC_socks_3.png', 'LAC_socks_4.png']
        }
    },
    LAR: {
        id: 'LAR',
        name: 'Los Angeles Rams',
        combinations: [
            { code: 'A', name: 'Home (Blue)' },
            { code: 'B', name: 'Away (Bone)' }
        ],
        assets: {
            helmet: ['LAR_helmet_1.png', 'LAR_helmet_2.png'],
            jersey: ['LAR_jersey_1.png', 'LAR_jersey_2.png', 'LAR_jersey_3.png', 'LAR_jersey_4.png'],
            pants: ['LAR_pants_1.png', 'LAR_pants_2.png', 'LAR_pants_3.png', 'LAR_pants_4.png'],
            socks: ['LAR_socks_1.png', 'LAR_socks_2.png', 'LAR_socks_3.png']
        }
    },
    LV: {
        id: 'LV',
        name: 'Las Vegas Raiders',
        combinations: [
            { code: 'A', name: 'Home (Black)' },
            { code: 'B', name: 'Away (White)' }
        ],
        assets: {
            helmet: ['LV_helmet_1.png'],
            jersey: ['LV_jersey_1.png', 'LV_jersey_2.png', 'LV_jersey_3.png'],
            pants: ['LV_pants_1.png'],
            socks: ['LV_socks_1.png']
        }
    },
    MIA: {
        id: 'MIA',
        name: 'Miami Dolphins',
        combinations: [
            { code: 'A', name: 'Home (Aqua)' },
            { code: 'B', name: 'Away (White)' }
        ],
        assets: {
            helmet: ['MIA_helmet_1.png', 'MIA_helmet_2.png', 'MIA_helmet_3.png'],
            jersey: ['MIA_jersey_1.png', 'MIA_jersey_2.png', 'MIA_jersey_3.png', 'MIA_jersey_4.png', 'MIA_jersey_5.png'],
            pants: ['MIA_pants_1.png', 'MIA_pants_2.png', 'MIA_pants_3.png', 'MIA_pants_4.png'],
            socks: ['MIA_socks_1.png', 'MIA_socks_2.png', 'MIA_socks_3.png', 'MIA_socks_4.png']
        }
    },
    MIN: {
        id: 'MIN',
        name: 'Minnesota Vikings',
        combinations: [
            { code: 'A', name: 'Home (Purple)' },
            { code: 'B', name: 'Away (White)' }
        ],
        assets: {
            helmet: ['MIN_helmet_1.png', 'MIN_helmet_2.png'],
            jersey: ['MIN_jersey_1.png', 'MIN_jersey_2.png', 'MIN_jersey_3.png', 'MIN_jersey_4.png'],
            pants: ['MIN_pants_1.png', 'MIN_pants_2.png', 'MIN_pants_3.png', 'MIN_pants_4.png'],
            socks: ['MIN_socks_1.png', 'MIN_socks_2.png']
        }
    },
    NE: {
        id: 'NE',
        name: 'New England Patriots',
        combinations: [
            { code: 'A', name: 'Home (Navy)' },
            { code: 'B', name: 'Away (White)' }
        ],
        assets: {
            helmet: ['NE_helmet_1.png', 'NE_helmet_2.png', 'NE_helmet_3.png'],
            jersey: ['NE_jersey_1.png', 'NE_jersey_2.png', 'NE_jersey_3.png', 'NE_jersey_4.png'],
            pants: ['NE_pants_1.png', 'NE_pants_2.png', 'NE_pants_3.png', 'NE_pants_4.png', 'NE_pants_5.png'],
            socks: ['NE_socks_1.png', 'NE_socks_2.png', 'NE_socks_3.png', 'NE_socks_4.png']
        }
    },
    NO: {
        id: 'NO',
        name: 'New Orleans Saints',
        combinations: [
            { code: 'A', name: 'Home (Black)' },
            { code: 'B', name: 'Away (White)' }
        ],
        assets: {
            helmet: ['NO_helmet_1.png', 'NO_helmet_2.png', 'NO_helmet_3.png'],
            jersey: ['NO_jersey_1.png', 'NO_jersey_2.png', 'NO_jersey_3.png', 'NO_jersey_4.png'],
            pants: ['NO_pants_1.png', 'NO_pants_2.png', 'NO_pants_3.png', 'NO_pants_4.png'],
            socks: ['NO_socks_1.png', 'NO_socks_2.png']
        }
    },
    NYJ: {
        id: 'NYJ',
        name: 'New York Jets',
        combinations: [
            { code: 'A', name: 'Home (Gotham Green)' },
            { code: 'B', name: 'Away (Spotlight White)' }
        ],
        assets: {
            helmet: ['NYJ_helmet_1.png', 'NYJ_helmet_2.png', 'NYJ_helmet_3.png', 'NYJ_helmet_4.png'],
            jersey: ['NYJ_jersey_1.png', 'NYJ_jersey_2.png', 'NYJ_jersey_3.png', 'NYJ_jersey_4.png', 'NYJ_jersey_5.png'],
            pants: ['NYJ_pants_1.png', 'NYJ_pants_2.png', 'NYJ_pants_3.png', 'NYJ_pants_4.png', 'NYJ_pants_5.png'],
            socks: ['NYJ_socks_1.png', 'NYJ_socks_2.png', 'NYJ_socks_3.png', 'NYJ_socks_4.png']
        }
    },
    PHI: {
        id: 'PHI',
        name: 'Philadelphia Eagles',
        combinations: [
            { code: 'A', name: 'Home (Midnight Green)' },
            { code: 'B', name: 'Away (White)' }
        ],
        assets: {
            helmet: ['PHI_helmet_1.png', 'PHI_helmet_2.png', 'PHI_helmet_3.png'],
            jersey: ['PHI_jersey_1.png', 'PHI_jersey_2.png', 'PHI_jersey_3.png', 'PHI_jersey_4.png'],
            pants: ['PHI_pants_1.png', 'PHI_pants_2.png', 'PHI_pants_3.png', 'PHI_pants_4.png'],
            socks: ['PHI_socks_1.png', 'PHI_socks_2.png', 'PHI_socks_3.png']
        }
    },
    PIT: {
        id: 'PIT',
        name: 'Pittsburgh Steelers',
        combinations: [
            { code: 'A', name: 'Home (Black)' },
            { code: 'B', name: 'Away (White)' }
        ],
        assets: {
            helmet: ['PIT_helmet_1.png', 'PIT_helmet_2.png'],
            jersey: ['PIT_jersey_1.png', 'PIT_jersey_2.png', 'PIT_jersey_3.png', 'PIT_jersey_4.png'],
            pants: ['PIT_pants_1.png', 'PIT_pants_2.png', 'PIT_pants_3.png'],
            socks: ['PIT_socks_1.png', 'PIT_socks_2.png']
        }
    },
    SEA: {
        id: 'SEA',
        name: 'Seattle Seahawks',
        combinations: [
            { code: 'A', name: 'Home (College Navy)' },
            { code: 'B', name: 'Away (White)' }
        ],
        assets: {
            helmet: ['SEA_helmet_1.png', 'SEA_helmet_2.png', 'SEA_helmet_3.png'],
            jersey: ['SEA_jersey_1.png', 'SEA_jersey_2.png', 'SEA_jersey_3.png', 'SEA_jersey_4.png'],
            pants: ['SEA_pants_1.png', 'SEA_pants_2.png', 'SEA_pants_3.png', 'SEA_pants_4.png', 'SEA_pants_5.png'],
            socks: ['SEA_socks_1.png', 'SEA_socks_2.png', 'SEA_socks_3.png']
        }
    },
    SF: {
        id: 'SF',
        name: 'San Francisco 49ers',
        combinations: [
            { code: 'A', name: 'Home (Red)' },
            { code: 'B', name: 'Away (White)' }
        ],
        assets: {
            helmet: ['SF_helmet_1.png', 'SF_helmet_2.png'],
            jersey: ['SF_jersey_1.png', 'SF_jersey_2.png', 'SF_jersey_3.png', 'SF_jersey_4.png', 'SF_jersey_5.png'],
            pants: ['SF_pants_1.png', 'SF_pants_2.png', 'SF_pants_3.png'],
            socks: ['SF_socks_1.png', 'SF_socks_2.png']
        }
    },
    TB: {
        id: 'TB',
        name: 'Tampa Bay Buccaneers',
        combinations: [
            { code: 'A', name: 'Home (Red)' },
            { code: 'B', name: 'Away (White)' }
        ],
        assets: {
            helmet: ['TB_helmet_1.png', 'TB_helmet_2.png'],
            jersey: ['TB_jersey_1.png', 'TB_jersey_2.png', 'TB_jersey_3.png', 'TB_jersey_4.png'],
            pants: ['TB_pants_1.png', 'TB_pants_2.png', 'TB_pants_3.png'],
            socks: ['TB_socks_1.png', 'TB_socks_2.png', 'TB_socks_3.png']
        }
    },
    TEN: {
        id: 'TEN',
        name: 'Tennessee Titans',
        combinations: [
            { code: 'A', name: 'Home (Navy)' },
            { code: 'B', name: 'Away (White)' }
        ],
        assets: {
            helmet: ['TEN_helmet_1.png'],
            jersey: ['TEN_jersey_1.png', 'TEN_jersey_2.png', 'TEN_jersey_3.png'],
            pants: ['TEN_pants_1.png', 'TEN_pants_2.png'],
            socks: ['TEN_socks_1.png', 'TEN_socks_2.png', 'TEN_socks_3.png']
        }
    },
    WSH: {
        id: 'WSH',
        name: 'Washington Commanders',
        combinations: [
            { code: 'A', name: 'Home (Burgundy)' },
            { code: 'B', name: 'Away (White)' }
        ],
        assets: {
            helmet: ['WSH_helmet_1.png', 'WSH_helmet_2.png', 'WSH_helmet_3.png'],
            jersey: ['WSH_jersey_1.png', 'WSH_jersey_2.png', 'WSH_jersey_3.png', 'WSH_jersey_4.png'],
            pants: ['WSH_pants_1.png', 'WSH_pants_2.png', 'WSH_pants_3.png', 'WSH_pants_4.png', 'WSH_pants_5.png'],
            socks: ['WSH_socks_1.png', 'WSH_socks_2.png', 'WSH_socks_3.png', 'WSH_socks_4.png']
        }
    },
};
