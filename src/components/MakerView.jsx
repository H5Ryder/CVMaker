import React, { useState } from "react";
import { Personal } from './view/Personal';
import { Education } from './view/Education';
import { Work } from './view/Work';
import {Skill} from './view/Skill';


export const MakerView = ({viewValues}) => {


    let {personalData, educationData, workData, skillData,swap} = viewValues;



    return (
        <div className = 'MakerView'>
            <Personal personalData = {personalData}/>

            {swap && ( <Work workData = {workData}/>)}
            <Education educationData = {educationData}/>
            {!swap && ( <Work workData = {workData}/>)}

            <Skill skillData = {skillData}/>

        </div>
    )
}