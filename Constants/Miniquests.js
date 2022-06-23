'use strict';

const { Miniquest } = require('../Structures');

class Miniquests {
    constructor() {
        this.barCrawl = new Miniquest({
            name: `Bar Crawl`,
            release: new Date(2002, 2, 25),
            members: true,
            difficulty: 'intermediate',
            length: 'short to medium'
        });
        this.battleOfTheMonolith = new Miniquest({
            name: `Battle of the Monolith`,
            release: new Date(2021, 4, 24),
            members: true,
            difficulty: 'intermediate',
            length: 'medium'

        });
        this.benedictsWorldTour = new Miniquest({
            name: `Benedict\'s World Tour`,
            release: new Date(2016, 3, 18),
            members: false,
            difficulty: 'intermediate',
            length: 'short'
        });
        this.boricsTaskI = new Miniquest({
            name: `Boric\'s Task I`,
            release: new Date(2012, 9, 17),
            members: true,
            difficulty: 'intermediate',
            length: 'very short'
        });
        this.boricsTaskII = new Miniquest({
            name: `Boric\'s Task II`,
            release: new Date(2012, 9, 17),
            members: true,
            difficulty: 'intermediate',
            length: 'very short'
        });
        this.boricsTaskIII = new Miniquest({
            name: `Boric\'s Task III`,
            release: new Date(2012, 9, 17),
            members: true,
            difficulty: 'experienced',
            length: 'short'
        });
        this.theCurseOfZaros = new Miniquest({
            name: `The Curse of Zaros`,
            release: new Date(2005, 6, 26),
            members: true,
            difficulty: 'intermediate',
            length: 'medium to long'
        });
        this.DamageControl = new Miniquest({
            name: `Damage Control`,
            release: new Date(2016, 9, 10),
            members: true,
            difficulty: 'grandmaster',
            length: 'short'
        });
        this.DesertSlayerDungeon = new Miniquest({
            name: `Desert Slayer Dungeon`,
            release: new Date(2008, 5, 5),
            members: true,
            difficulty: 'intermediate',
            length: 'short to medium'
        });
        this.DoricsTaskI = new Miniquest({
            name: `Doric\'s Task I`,
            release: new Date(2012, 9, 17),
            members: false,
            difficulty: 'novice',
            length: 'very short'
        });
        this.DoricsTaskII = new Miniquest({
            name: `Doric\'s Task II`,
            release: new Date(2012, 9, 17),
            members: false,
            difficulty: 'novice',
            length: 'very short'
        });
        this.DoricsTaskIII = new Miniquest({
            name: `Doric\'s Task III`,
            release: new Date(2012, 9, 17),
            members: false,
            difficulty: 'intermediate',
            length: 'short'
        });
        this.DoricsTaskIV = new Miniquest({
            name: `Doric\'s Task IV`,
            release: new Date(2012, 9, 17),
            members: false,
            difficulty: 'intermediate',
            length: 'medium'
        });
        this.DoricsTaskV = new Miniquest({
            name: `Doric\'s Task V`,
            release: new Date(2012, 9, 17),
            members: true,
            difficulty: 'experienced',
            length: 'short'
        });
        this.DoricsTaskVI = new Miniquest({
            name: `Doric\'s Task VI`,
            release: new Date(2012, 9, 17),
            members: true,
            difficulty: 'experienced',
            length: 'short'
        });
        this.DoricsTaskVII = new Miniquest({
            name: `Doric\'s Task VII`,
            release: new Date(2012, 9, 17),
            members: true,
            difficulty: 'master',
            length: 'short'
        });
        this.DoricsTaskVIII = new Miniquest({
            name: `Doric\'s Task VIII`,
            release: new Date(2012, 9, 17),
            members: true,
            difficulty: 'master',
            length: 'short'
        });
        this.EnterTheAbyss = new Miniquest({
            name: `Enter the Abyss`,
            release: new Date(2005, 5, 13),
            members: true,
            difficulty: 'intermediate',
            length: 'short'
        });
        this.EyeForAnEye = new Miniquest({
            name: `Eye for an Eye`,
            release: new Date(2016, 9, 10),
            members: true,
            difficulty: 'grandmaster',
            length: 'short'
        });
        this.EyeOfHetI = new Miniquest({
            name: `Eye of Het I`,
            release: new Date(2022, 0, 4),
            members: true,
            difficulty: 'novice',
            length: 'short'
        });
        this.EyeOfHetII = new Miniquest({
            name: `Eye of Het II`,
            release: new Date(2022, 0, 10),
            members: true,
            difficulty: 'novice',
            length: 'short'
        });
        this.FatherAndSon = new Miniquest({
            name: `Father and Son`,
            release: new Date(2019, 9, 7),
            members: true,
            difficulty: 'novice',
            length: 'short'
        });
        this.FinalDestination = new Miniquest({
            name: `Final Destination`,
            release: new Date(2016, 9, 10),
            members: true,
            difficulty: 'grandmaster',
            length: 'short'
        });
        this.FlagFall = new Miniquest({
            name: `Flag Fall`,
            release: new Date(2016, 6, 25),
            members: true,
            difficulty: 'intermediate',
            length: 'short to medium'
        });
        this.FromTinyAcorns = new Miniquest({
            name: `From Tiny Acorns`,
            release: new Date(2010, 3, 28),
            members: true,
            difficulty: 'novice',
            length: 'short'
        });
        this.TheGeneralsShadow = new Miniquest({
            name: `The General\'s Shadow`,
            release: new Date(2007, 1, 12),
            members: true,
            difficulty: 'experienced',
            length: 'short'
        });
        this.GhostsFromThePast = new Miniquest({
            name: `Ghosts from the Past`,
            release: new Date(2016, 9, 10),
            members: true,
            difficulty: 'grandmaster',
            length: 'short'
        });
        this.AGuildOfOurOwn = new Miniquest({
            name: `A Guild of Our Own`,
            release: new Date(2010, 3, 28),
            members: true,
            difficulty: 'master',
            length: 'short to medium'
        });
        this.Harbinger = new Miniquest({
            name: `Harbinger`,
            release: new Date(2016, 9, 10),
            members: true,
            difficulty: 'grandmaster',
            length: 'short'
        });
        this.HeadOfTheFamily = new Miniquest({
            name: `Head of the Family`,
            release: new Date(2016, 6, 25),
            members: true,
            difficulty: 'grandmaster',
            length: 'medium'
        });
        this.HelpingLaniakea = new Miniquest({
            name: `Helping Laniakea`,
            release: new Date(2019, 6, 8),
            members: true,
            difficulty: 'novice',
            length: 'medium'
        });
        this.HopespearsWill = new Miniquest({
            name: `Hopespear\'s Will`,
            release: new Date(2007, 10, 12),
            members: true,
            difficulty: 'experienced',
            length: 'short'
        });
        this.TheHuntForSurok = new Miniquest({
            name: `The Hunt for Surok`,
            release: new Date(2008, 3, 4),
            members: true,
            difficulty: 'experienced',
            length: 'short to medium'
        });
        this.InMemoryOfTheMyreque = new Miniquest({
            name: `In Memory of the Myreque`,
            release: new Date(2016, 3, 11),
            members: true,
            difficulty: 'grandmaster',
            length: 'long'
        });
        this.JedHunter = new Miniquest({
            name: `Jed Hunter`,
            release: new Date(2016, 6, 25),
            members: true,
            difficulty: 'grandmaster',
            length: 'short'
        });
        this.KoscheisTroubles = new Miniquest({
            name: `Koschei\'s Troubles`,
            release: new Date(2013, 1, 18),
            members: true,
            difficulty: 'grandmaster',
            length: 'short'
        });
        this.LairOfTarnRazorlor = new Miniquest({
            name: `Lair of Tarn Razorlor`,
            release: new Date(2007, 0, 22),
            members: true,
            difficulty: 'experienced',
            length: 'medium'
        });
        this.LostHerMarbles = new Miniquest({
            name: `Lost Her Marbles`,
            release: new Date(2010, 3, 28),
            members: true,
            difficulty: 'intermediate',
            length: 'medium'
        });
        this.TheLostToys = new Miniquest({
            name: `The Lost Toys`,
            release: new Date(2016, 3, 11),
            members: true,
            difficulty: 'grandmaster',
            length: 'medium'
        });
        this.MahjarratMemories = new Miniquest({
            name: `Mahjarrat Memories`,
            release: new Date(2014, 2, 17),
            members: true,
            difficulty: 'grandmaster',
            length: 'very, very long'
        });
        this.Nadir = new Miniquest({
            name: `Nadir`,
            release: new Date(2012, 3, 24),
            members: true,
            difficulty: 'experienced',
            length: 'medium'
        });
        this.OneFootInTheGrave = new Miniquest({
            name: `One Foot`,
            release: new Date(2007, 9, 9),
            members: true,
            difficulty: 'master',
            length: 'short to medium'
        });
        this.PurpleCat = new Miniquest({
            name: `Purple Cat`,
            release: new Date(2008, 9, 28),
            members: false,
            difficulty: 'intermediate',
            length: 'short'
        });
        this.RakshatheShadowColossus = new Miniquest({
            name: `Raksha, the Shadow Colossus`,
            release: new Date(2020, 11, 7),
            members: true,
            difficulty: 'novice',
            length: 'short'
        });
        this.RebuildingEdgeville = new Miniquest({
            name: `Rebuilding Edgeville`,
            release: new Date(2018, 3, 9),
            members: true,
            difficulty: 'grandmaster',
            length: 'short'
        });
        this.SheepShearer = new Miniquest({
            name: `Sheep Shearer`,
            release: new Date(2001, 0, 4),
            members: false,
            difficulty: 'novice',
            length: 'very short'

        });
        this.SinsOfTheFather = new Miniquest({
            name: `Sins of the Father`,
            release: new Date(2020, 8, 14),
            members: true,
            difficulty: 'novice',
            length: 'short'
        });
        this.SpiritualEnlightenment = new Miniquest({
            name: `Spiritual Enlightenment`,
            release: new Date(2016, 6, 25),
            members: true,
            difficulty: 'grandmaster',
            length: 'medium'
        });
        this.TalesOfNomad = new Miniquest({
            name: `Tales of Nomad`,
            release: new Date(2016, 8, 26),
            members: true,
            difficulty: 'master',
            length: 'short'
        });
        this.TalesOfTheGodWars = new Miniquest({
            name: `Tales of the God Wars`,
            release: new Date(2016, 2, 7),
            members: true,
            difficulty: 'experienced',
            length: 'medium'
        });
        this.ThokItToEm = new Miniquest({
            name: `Thok It To \'Em`,
            release: new Date(2011, 5, 1),
            members: true,
            difficulty: 'experienced',
            length: 'medium'
        });
        this.ThokYourBlockOff = new Miniquest({
            name: `Thok Your Block Off`,
            release: new Date(2012, 3, 24),
            members: true,
            difficulty: 'master',
            length: 'medium'
        });
        this.ThreesCompany = new Miniquest({
            name: `Three\'s Company`,
            release: new Date(2011, 5, 1),
            members: false,
            difficulty: 'intermediate',
            length: 'medium'
        });
        this.TortleCombat = new Miniquest({
            name: `Tortle Combat`,
            release: new Date(2021, 1, 1),
            members: true,
            difficulty: 'novice',
            length: 'medium'
        });
        this.TuaiLeitsOwn = new Miniquest({
            name: `Tuai Leit\'s Own`,
            release: new Date(2016, 9, 10),
            members: true,
            difficulty: 'grandmaster',
            length: 'short to medium'
        });
        this.TheVaultOfShadows = new Miniquest({
            name: `The Vault of Shadows`,
            release: new Date(2021, 0, 25),
            members: true,
            difficulty: 'experienced',
            length: 'medium'
        });
        this.Vengeance = new Miniquest({
            name: `Vengeance`,
            release: new Date(2011, 5, 1),
            members: true,
            difficulty: 'intermediate',
            length: 'medium'
        });
        this.WanderingGaAl = new Miniquest({
            name: `Wandering Ga\'al`,
            release: new Date(2013, 0, 3),
            members: true,
            difficulty: 'grandmaster',
            length: 'very short'
        });
        this.WitchsPotion = new Miniquest({
            name: `Witch\'s Potion`,
            release: new Date(2001, 3, 6),
            members: false,
            difficulty: 'novice',
            length: 'very short'
        });
    };
};

module.exports = Miniquests;