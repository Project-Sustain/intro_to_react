/*                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/
Software in the Sustain Ecosystem are Released Under Terms of Apache Software License 
This research has been supported by funding from the US National Science Foundation's CSSI program through awards 1931363, 1931324, 1931335, and 1931283. The project is a joint effort involving Colorado State University, Arizona State University, the University of California-Irvine, and the University of Maryland - Baltimore County. All redistributions of the software must also include this information. 
TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION
1. Definitions.
"License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.
"Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.
"Legal Entity" shall mean the union of the acting entity and all other entities that control, are controlled by, or are under common control with that entity. For the purposes of this definition, "control" means (i) the power, direct or indirect, to cause the direction or management of such entity, whether by contract or otherwise, or (ii) ownership of fifty percent (50%) or more of the outstanding shares, or (iii) beneficial ownership of such entity.
"You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.
"Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.
"Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.
"Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work (an example is provided in the Appendix below).
"Derivative Works" shall mean any work, whether in Source or Object form, that is based on (or derived from) the Work and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. For the purposes of this License, Derivative Works shall not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Work and Derivative Works thereof.
"Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work or Derivative Works thereof, that is intentionally submitted to Licensor for inclusion in the Work by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Work, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."
"Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Work.
2. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.
3. Grant of Patent License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Work or a Contribution incorporated within the Work constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for that Work shall terminate as of the date such litigation is filed.
4. Redistribution. You may reproduce and distribute copies of the Work or Derivative Works thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:
You must give any other recipients of the Work or Derivative Works a copy of this License; and
You must cause any modified files to carry prominent notices stating that You changed the files; and
You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Derivative Works; and
If the Work includes a "NOTICE" text file as part of its distribution, then any Derivative Works that You distribute must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Derivative Works, in at least one of the following places: within a NOTICE text file distributed as part of the Derivative Works; within the Source form or documentation, if provided along with the Derivative Works; or, within a display generated by the Derivative Works, if and wherever such third-party notices normally appear. The contents of the NOTICE file are for informational purposes only and do not modify the License. You may add Your own attribution notices within Derivative Works that You distribute, alongside or as an addendum to the NOTICE text from the Work, provided that such additional attribution notices cannot be construed as modifying the License. 
You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications, or for any such Derivative Works as a whole, provided Your use, reproduction, and distribution of the Work otherwise complies with the conditions stated in this License.
5. Submission of Contributions. Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. Notwithstanding the above, nothing herein shall supersede or modify the terms of any separate license agreement you may have executed with Licensor regarding such Contributions.
6. Trademarks. This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.
7. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.
8. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.
9. Accepting Warranty or Additional Liability. While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability. 
END OF TERMS AND CONDITIONS
*/


import { useState, useEffect } from "react";
import { Stack, Paper, Typography, styled} from "@mui/material";
import { UseDeckMap } from "../hooks/UseDeckMap";
import { UseApi } from "../hooks/UseApi";
import DeckMap from "./DeckMap";
import { Button } from "@mui/material";
import ExampleLineChart from "./ExampleLineChart";
import React, { ChangeEvent } from 'react';
import stateData from "../library/state_data.json"; //I imported this - this imports the state_data.json into main in order to be accessed - would access it by saying stateData.map for example
import countyData from "../library/county_data.json"; //import county_data.json
//make a separate file that turns state_data.json into a list and then call that in main
//make a separate file that turns county_data.json into a list and then call that in main
//look up how to use a react map in order to make a list out of a json file
//NOTE: using react, typescript, and MUI for this project - link to MUI can be found in the README

interface MainProps {
    title: string
}

export default function Main({ title }: MainProps) {


    const Map = UseDeckMap();
    const Api = UseApi();

    const [selectedState, setSelectedState] = useState('');
    const [countyList, setCountyList] = useState<string[]>([]);
    const [selectedCounty, setSelectedCounty] = useState('');
    const [showCounties, setShowCounties] = useState(false); 
    const [inputValue, setInputValue] = useState('---');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [showCountyButton, setShowCountyButton] = useState(false);

    const countyFullList = countyData.map((x) => [x.name, x.GISJOIN]); //list containing an array of county names and county GISJOIN numbers
    const stateNameList = stateData.map((x) => x.name); //list containing just the state names
    const stateGISList = stateData.map((x) => x.GISJOIN); //list containing just the state GISJOIN


    useEffect(() => {
        /**
         * Get the list of associated counties
         * Call to setCountyList() with the list of associated counties
         */
        let index: number = stateNameList.indexOf(selectedState); 
        let stateKey: string = stateGISList[index]; 
        const associatedCounties = countyFullList.filter(([_, word]) => word.substring(0, 4) === stateKey);
        const associatedCountyNames = associatedCounties.map(([name, _]) => name); //list containing only the names of the associated counties
        setCountyList(associatedCountyNames);

    }, [selectedState]);


    /**
     * This is the function that connects to the online API and retrieves information associated
     *      with a state/county. Included in that information is the coordinates. Currently
     *      state/county are hard-coded to 'Larimer', and 'Colorado'. 
     * 
     * This function logs to the console the return from the API. Open the inspection pane in your
     *      browser to see what is printed in the console. You can usually do this by right clicking
     *      on the page and selection 'inspect', then going to the console tab.
     * 
     * We'll talk about what this function is doing during the meeting.
     */
    const sendCoordinatesRequest = async() => {
        const response = await Api.functions.sendRequest(selectedState, selectedCounty);
        let valid = true;
        // if(selectedState == ''){ //this causes me to have to click twice on each county for it to zoom into the map, rerendering is one step late?
        //     valid = false; 
        // }
        if (response && valid) {
            console.log(selectedCounty);
            console.log(response); //when I first click on a county, it doesn't take me to that county on the map, it takes me to that county after a second click?
            const geometry = response.results[0].geometry;
            Map.functions.updateMapViewState([geometry.lng, geometry.lat]); 
        }
        else console.log('Error sending API request');
    }

    const handleStateClick = (stateName: string) => {
        setSelectedState(stateName);
        setSelectedRegion(stateName);
        console.log(showCountyButton);
        setShowCountyButton(!showCountyButton); 
        console.log(showCountyButton);
        if(showCountyButton === true){ //have to set this to true because the rerender is one step late?
            //setSelectedState('');
            setSelectedRegion(''); 
            //setSelectedCounty('');
        }
    }

    const displayCounties = () => {
        setShowCounties(!showCounties);
        setInputValue('---');
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === ''){
            setInputValue('---');
        }
        else{
            setInputValue(e.target.value); //input value holds the text within the search box
        }
    }

    const handleCountyClick = (countyName: string) => {
        setSelectedCounty(countyName); 
        sendCoordinatesRequest();
        setSelectedRegion(countyName);
        //console.log(selectedCounty); //why is this one click late? I have to click the county twice in order for it to log on the console?
    }

    const handleDropDownClick = (countyName: string) => {
        setSelectedCounty(countyName);
        setSelectedRegion(countyName);
    }

    const resetMapZoom = () => {
        setSelectedState('');
        setSelectedCounty('');
        setSelectedRegion('');
        console.log(selectedCounty);
        console.log(selectedState);
        Map.functions.setMapViewState({
            longitude: -98.5795,
            latitude: 39.8283,
            zoom: 4.3,
            pitch: 30,
            bearing: 0})
    }

    const filteredCounties = countyList.filter(county => county.toLowerCase().includes(inputValue.toLowerCase()));

    return (
        <>
            <DeckMap Map={Map} />
            <Stack direction='row' spacing={2}>
                <StyledPaper elevation={3} sx={{fontSize: '15pt', maxWidth: '8vw', maxHeight: '46vw'}}>
                    <Stack direction= 'column' sx={{lineHeight: '0.8'}}>
                        {stateNameList.slice(0,26).map((stateName, index) => (
                            <div>
                            <Button sx={{fontSize: '6pt'}} key={index} 
                                onClick={() => handleStateClick(stateName)} 
                                variant='text'>{stateName}
                            </Button>
                            {showCountyButton && selectedState === stateName && (
                                <div>
                                    <Button sx={{fontSize: '5pt', background: 'black'}} 
                                            onClick={() => displayCounties()}
                                            variant='text'>
                                            {showCounties ? 'Hide Counties' : 'Show Counties'}
                                    </Button>
                                    {showCounties && (
                                        <StyledPaper sx={{opacity: 100, zIndex: 7000, backgroundColor: 'black'}}>
                                            {countyList.map((countyName, index) => (
                                                <Button sx={{fontSize: '5pt'}} key={index} 
                                                onClick={() => handleCountyClick(countyName)} 
                                                variant='text'>{countyName}
                                                </Button>
                                            ))}
                                        </StyledPaper>
                                    )}
                                </div>
                            )}
                            </div>
                        ))}
                    </Stack>
                </StyledPaper>
                <StyledPaper elevation={3} sx={{fontSize: '15pt', maxWidth: '8vw', maxHeight: '46vw', zIndex: 2000}}>
                    <Stack direction= 'column' sx={{lineHeight: '0.1'}}>
                        {stateNameList.slice(27).map((stateName, index) => (
                            <div>
                                <Button sx={{fontSize: '6pt'}} key={index} 
                                    onClick={() => handleStateClick(stateName)} 
                                    variant='text'>{stateName}
                                </Button>
                                {showCountyButton && selectedState === stateName && (
                                    <div>
                                        <Button sx={{fontSize: '5pt', background: 'black'}} 
                                            onClick={() => displayCounties()}
                                            variant='contained'>
                                            {showCounties ? 'Hide Counties' : 'Show Counties'}
                                        </Button>
                                        {showCounties && (
                                            <StyledPaper sx={{opacity: 100, zIndex: 7000, backgroundColor: 'black'}}>
                                                {countyList.map((countyName, index) => (
                                                    <Button sx={{fontSize: '5pt'}} key={index} 
                                                    onClick={() => handleCountyClick(countyName)} 
                                                    variant='text'>{countyName}
                                                    </Button>
                                                ))}
                                            </StyledPaper>
                                        )}


                                    </div>
                                )}
                            </div>
                        ))}
                    </Stack>
                </StyledPaper>
                <StyledPaper elevation={7} sx={{maxWidth: '17vw', maxHeight: '17vw', zIndex: 1000, marginLeft: 'auto'}}>
                    <Stack direction='column' alignItems='center' spacing={1}>
                        <Typography sx={{fontSize: '15pt'}} align='center'>State/County Search Site </Typography>
                        <Typography align='center'>{selectedRegion} </Typography>
                        <div className="textfield--wrapper">
                            <div className="textfield--header">
                            </div>
                            <input 
                                type="search" 
                                onChange={handleInputChange}
                                placeholder='search or select a county' />
                            <ul>
                                {filteredCounties.map((name, index) => (
                                    <Button sx={{fontSize: '7pt'}} key={index}
                                    onClick={() => handleDropDownClick(name)}
                                    variant='text'>{name}
                                    </Button>
                                ))}
                            </ul>
                        </div>
                        <Button onClick={sendCoordinatesRequest} variant='contained'>Send Request</Button>
                        <Button onClick={resetMapZoom} variant='contained'>Reset Map</Button>
                    </Stack>
                </StyledPaper>
            </Stack>
            
            {/*<Stack>*/}
                {/* Uncomment below to see a chart example */}
                {/*<Paper className={classes.root} elevation={3}>
                    <ExampleLineChart/>
                </Paper> */}
            {/*</Stack>*/}
        </>
    );

}

const StyledPaper = styled(Paper)({
    width: '25vw',
    margin: '10px',
    padding: '5px',
    zIndex: 5000,
    opacity: 0.8,
})

