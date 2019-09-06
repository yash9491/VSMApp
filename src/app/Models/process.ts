export class Process{
    ProcessName: any;
    ProcessingTime: number;
    ElapsedTime: number;
    WaitTime: number;
    WeightedTime: number;
    Activities: Activities[];

}

export class Activities{
    ActivityName: any;
    ProcessingTime: number;
    ElapsedTime: number;
    WaitTime: number;
    WeightedTime: number;
}