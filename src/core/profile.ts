import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class Profile {
    @PrimaryColumn()
    id: string;

    @Column({default: 'Warrior'})
    name: string;

    @Column({default: 0})
    gold: number;

    @Column({default: 0})
    shares: number;

    @Column({default: ''})
    tezosAddress: string;

    @Column({default: 1})
    currentStep: number;

    @Column({default: true})
    isStepSolved: boolean;

    @Column({default: 0})
    screenTime: number;

    // ToDo: move to payload
    currentPage: string;
}
