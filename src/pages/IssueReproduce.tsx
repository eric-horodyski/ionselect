import { IonContent, IonItem, IonLabel, IonPage, IonSelect, IonSelectOption } from '@ionic/react'
import React, { useState } from 'react'

const options = ['option1', 'option2', 'option3', "option4"]

const IssueReproduce = () => {
    const [selection, setSelection] = useState()
    return (
        <IonPage>
            <IonContent>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'
                }}>
                    <div style={{
                        width: '400px',
                    }}>
                        <IonItem>
                            <IonLabel>test label</IonLabel>
                            <IonSelect
                                name={'dropDown'}
                                data-testid={'dropdown'}
                                value={selection}
                                cancelText='cancel'
                                okText='okay'
                                onIonChange={(e) => setSelection(e.detail.value)}
                                interfaceOptions={{ header: 'select Your option' }}
                                interface="alert"
                            >
                                {options.map((value: string) => (
                                    <IonSelectOption key={value} value={value} aria-label={value}>
                                        {value}
                                    </IonSelectOption>
                                ))}
                            </IonSelect>
                        </IonItem>
                    </div>
                </div>


            </IonContent>
        </IonPage>
    )
}

export default IssueReproduce