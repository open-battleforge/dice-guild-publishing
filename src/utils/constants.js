import { Bookmark, LibraryBooks } from '@mui/icons-material';
import GitHubIcon from '@mui/icons-material/GitHub';
import DiceIcon from 'mdi-material-ui/Dice6';
import Discord from 'mdi-material-ui/Discord';
import Coffee from 'mdi-material-ui/CoffeeOutline';
import VortexGateImage from 'assets/images/vortex_gate.jpg';
import VortexGateLogo from 'assets/images/vortex_gate_logo.png';
import BattleForgeImage from 'assets/images/battle_forge.jpg';
import BattleForgeLogo from 'assets/images/battle_forge_logo.png';
import QuestForgeImage from 'assets/images/quest_forge.jpg';
import QuestForgeLogo from 'assets/images/quest_forge_logo.png';

export const GAMES = {
  "vortex_gate": {
    "id": "vortex_gate",
    "name": "Vortex Gate",
    "toAbs": "https://www.vortexgategame.com/",
    "text": "Modular miniature wargame which covers skirmish up to large battle game sizes with many different game settings available.",
    "image": VortexGateImage,
    "logo": VortexGateLogo,
    "color": "#2e8545"
  },
  "battle_forge": {
    "id": "battle_forge",
    "name": "Battle Forge",
    "toAbs": "https://www.battleforgegame.com/",
    "text": "Modular miniature wargame which covers skirmish up to large battle game sizes with many different game settings available.",
    "image": BattleForgeImage,
    "logo": BattleForgeLogo,
    "color": "#2e8545"
  },
  "quest_forge": {
    "id": "quest_forge",
    "name": "Quest Forge",
    "toAbs": "https://www.questforgegame.com/",
    "text": "Modular roleplaying game with several different settings to choose from and a flexible set of rules to cover anything you want.",
    "image": QuestForgeImage,
    "logo": QuestForgeLogo,
    "color": "#613480"
  }
}

export const navItems = [
  {
    id: 'about',
    name: 'About',
    icon: <LibraryBooks />,
    to: '/about'
  },
  {
    id: 'games',
    name: 'Games',
    icon: <DiceIcon />,
    to: '/games',
    children: [
      ...(Object.values(GAMES).map((game) => (
        {
          id: game?.name,
          name: game?.name,
          icon: <Bookmark />,
          toAbs: game?.toAbs
        }
      )))
    ]
  },
  {
    id: 'divider'
  },
  {
    id: 'github',
    name: 'GitHub',
    icon: <GitHubIcon />,
    toAbs: 'https://github.com/dice-guild'
  },
  {
    id: 'discord',
    name: 'Discord',
    icon: <Discord />,
    toAbs: 'https://discord.com/invite/M9sets4'
  },
  {
    id: 'donate',
    name: 'Donate',
    icon: <Coffee />,
    toAbs: 'https://ko-fi.com/diceguild'
  }
];