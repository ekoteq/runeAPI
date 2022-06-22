'use strict';

const { Miniquest } = require('../Structures');

class Miniquests {
    constructor() {
        this.barCrawl = new Miniquest({
            name: `Bar Crawl`,
            members: true,
            difficulty: 'intermediate'
        });
        this.battleOfTheMonolith = new Miniquest({
            name: `Battle of the Monolith`,
            members: true,
            difficulty: 'intermediate'
        });
        this.benedictsWorldTour = new Miniquest({
            name: `Benedict\'s World Tour`,
            members: false,
            difficulty: 'intermediate'
        });
        this.boricsTaskI = new Miniquest({
            name: `Boric\'s Task I`,
            members: true,
            difficulty: 'intermediate'
        });
        this.boricsTaskII = new Miniquest({
            name: `Boric\'s Task II`,
            members: true,
            difficulty: 'intermediate'
        });
        this.boricsTaskIII = new Miniquest({
            name: `Boric\'s Task III`,
            members: true,
            difficulty: 'experienced'
        });
        this.theCurseOfZaros = new Miniquest({
            name: `The Curse of Zaros`,
            members: true,
            difficulty: 'intermediate'
        });
        this.DamageControl = new Miniquest({
            name: `Damage Control`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.DesertSlayerDungeon = new Miniquest({
            name: `Desert Slayer Dungeon`,
            members: true,
            difficulty: 'intermediate'
        });
        this.DoricsTaskI = new Miniquest({
            name: `Doric\'s Task I`,
            members: false,
            difficulty: 'novice'
        });
        this.DoricsTaskII = new Miniquest({
            name: `Doric\'s Task II`,
            members: false,
            difficulty: 'novice'
        });
        this.DoricsTaskIII = new Miniquest({
            name: `Doric\'s Task III`,
            members: false,
            difficulty: 'intermediate'
        });
        this.DoricsTaskIV = new Miniquest({
            name: `Doric\'s Task IV`,
            members: false,
            difficulty: 'intermediate'
        });
        this.DoricsTaskV = new Miniquest({
            name: `Doric\'s Task V`,
            members: true,
            difficulty: 'experienced'
        });
        this.DoricsTaskVI = new Miniquest({
            name: `Doric\'s Task VI`,
            members: true,
            difficulty: 'experienced'
        });
        this.DoricsTaskVII = new Miniquest({
            name: `Doric\'s Task VII`,
            members: true,
            difficulty: 'master'
        });
        this.DoricsTaskVIII = new Miniquest({
            name: `Doric\'s Task VIII`,
            members: true,
            difficulty: 'master'
        });
        this.EnterTheAbyss = new Miniquest({
            name: `Enter the Abyss`,
            members: true,
            difficulty: 'intermediate'
        });
        this.EyeForAnEye = new Miniquest({
            name: `Eye for an Eye`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.EyeOfHetI = new Miniquest({
            name: `Eye of Het I`,
            members: true,
            difficulty: 'novice'
        });
        this.EyeOfHetII = new Miniquest({
            name: `Eye of Het II`,
            members: true,
            difficulty: 'novice'
        });
        this.FatherAndSon = new Miniquest({
            name: `Father and Son`,
            members: true,
            difficulty: 'novice'
        });
        this.FinalDestination = new Miniquest({
            name: `Final Destination`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.FlagFall = new Miniquest({
            name: `Flag Fall`,
            members: true,
            difficulty: 'intermediate'
        });
        this.FromTinyAcorns = new Miniquest({
            name: `From Tiny Acorns`,
            members: true,
            difficulty: 'novice'
        });
        this.TheGeneralsShadow = new Miniquest({
            name: `The General\'s Shadow`,
            members: true,
            difficulty: 'experienced'
        });
        this.GhostsFromThePast = new Miniquest({
            name: `Ghosts from the Past`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.AGuildOfOurOwn = new Miniquest({
            name: `A Guild of Our Own`,
            members: true,
            difficulty: 'master'
        });
        this.Harbinger = new Miniquest({
            name: `Harbinger`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.HeadOfTheFamily = new Miniquest({
            name: `Head of the Family`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.HelpingLaniakea = new Miniquest({
            name: `Helping Laniakea`,
            members: true,
            difficulty: 'novice'
        });
        this.HopespearsWill = new Miniquest({
            name: `Hopespear\'s Will`,
            members: true,
            difficulty: 'experienced'
        });
        this.TheHuntForSurok = new Miniquest({
            name: `The Hunt`,
            members: true,
            difficulty: 'experienced'
        });
        this.InMemoryOfTheMyreque = new Miniquest({
            name: `In Memory of the Myreque`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.JedHunter = new Miniquest({
            name: `Jed Hunter`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.KoscheisTroubles = new Miniquest({
            name: `Koschei\'s Troubles`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.LairOfTarnRazorlor = new Miniquest({
            name: `Lair of Tarn Razorlor`,
            members: true,
            difficulty: 'experienced'
        });
        this.LostHerMarbles = new Miniquest({
            name: `Lost Her Marbles`,
            members: true,
            difficulty: 'intermediate'
        });
        this.TheLostToys = new Miniquest({
            name: `The Lost Toys`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.MahjarratMemories = new Miniquest({
            name: `Mahjarrat Memories`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.Nadir = new Miniquest({
            name: `Nadir`,
            members: true,
            difficulty: 'experienced'
        });
        this.OneFootInTheGrave = new Miniquest({
            name: `One Foot`,
            members: true,
            difficulty: 'master'
        });
        this.PurpleCat = new Miniquest({
            name: `Purple Cat`,
            members: false,
            difficulty: 'intermediate'
        });
        this.RakshatheShadowColossus = new Miniquest({
            name: `Raksha, the Shadow Colossus`,
            members: true,
            difficulty: 'novice'
        });
        this.RebuildingEdgeville = new Miniquest({
            name: `Rebuilding Edgeville`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.SheepShearer = new Miniquest({
            name: `Sheep Shearer`,
            members: false,
            difficulty: 'novice'
        });
        this.SinsOfTheFather = new Miniquest({
            name: `Sins of the Father`,
            members: true,
            difficulty: 'novice'
        });
        this.SpiritualEnlightenment = new Miniquest({
            name: `Spiritual Enlightenment`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.TalesOfNomad = new Miniquest({
            name: `Tales of Nomad`,
            members: true,
            difficulty: 'master'
        });
        this.TalesOfTheGodWars = new Miniquest({
            name: `Tales of the God Wars`,
            members: true,
            difficulty: 'experienced'
        });
        this.ThokItToEm = new Miniquest({
            name: `Thok It To \'Em`,
            members: true,
            difficulty: 'experienced'
        });
        this.ThokYourBlockOff = new Miniquest({
            name: `Thok Your Block Off`,
            members: true,
            difficulty: 'master'
        });
        this.ThreesCompany = new Miniquest({
            name: `Three\'s Company`,
            members: false,
            difficulty: 'intermediate'
        });
        this.TortleCombat = new Miniquest({
            name: `Tortle Combat`,
            members: true,
            difficulty: 'novice'
        });
        this.TuaiLeitsOwn = new Miniquest({
            name: `Tuai Leit\'s Own`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.TheVaultOfShadows = new Miniquest({
            name: `The Vault of Shadows`,
            members: true,
            difficulty: 'experienced'
        });
        this.Vengeance = new Miniquest({
            name: `Vengeance`,
            members: true,
            difficulty: 'intermediate'
        });
        this.WanderingGaAl = new Miniquest({
            name: `Wandering Ga\'al`,
            members: true,
            difficulty: 'grandmaster'
        });
        this.WitchsPotion = new Miniquest({
            name: `Witch\'s Potion`,
            members: false,
            difficulty: 'novice'
        });
    };
};

module.exports = Miniquests;