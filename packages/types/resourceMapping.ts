import { NoticeInfo } from './ProtoApi'
import type {
  Card,
  CardLevel,
  CardParameter,
  CardRarity,
  Character,
  Message,
  MessageGroup,
  Music,
  MusicChartPattern,
  Skill,
  Story,
} from './ProtoMaster'

import { TheRootMapping as SkillxData } from './Skillx'

export type ResourceMapping = {
  Card: Card[]
  CardLevel: CardLevel[]
  CardParameter: CardParameter[]
  CardRarity: CardRarity[]
  Character: Character[]
  Message: Message[]
  MessageGroup: MessageGroup[]
  Music: Music[]
  MusicChartPattern: MusicChartPattern[]
  Notice: {
    notices: NoticeInfo[]
    malfunctionNotices: NoticeInfo[]
    prNotices: NoticeInfo[]
  }
  Skill: Skill[]
  Skillx: SkillxData
  Story: Story[]
}
