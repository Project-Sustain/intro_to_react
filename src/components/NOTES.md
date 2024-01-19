{stateNameList.map((stateName, index) => (
                        <div>
                        <Button sx={{fontSize: '8pt'}} key={index} 
                            onClick={() => displayCounties(stateName)} 
                            variant='text'>{stateName}
                        </Button>
                        {showCounties && (
                            <div>
                                <StyledPaper>
                                    {countyList.map((countyName, index) => (
                                        <Button sx={{fontSize: '5pt'}} key={index} 
                                        onClick={() => setSelectedCounty(countyName)} 
                                        variant='text'>{countyName}
                                        </Button>
                                    ))}
                                </StyledPaper>
                            </div>
                        )}
                        </div>
                    ))}