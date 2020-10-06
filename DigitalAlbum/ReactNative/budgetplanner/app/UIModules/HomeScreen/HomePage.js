import React from "react"
import { Button, SafeAreaView, Text, View } from "react-native"
import { ADD_EXPENSE_PAGE, EXPENSES_YEARS_LIST } from "../../Constants/PageNameConstants";

class HomePage extends React.Component {
    render() {
        const mainUIComponent = (
            <>
                <SafeAreaView>
                    <View>
                        <Text>
                            HomePage
                        </Text>
                        <Button title="Add Expense" onPress={ () => { this.props.navigation.navigate(ADD_EXPENSE_PAGE); } } />
                        <Button title="Display Expenses" onPress={ () => { this.props.navigation.navigate(EXPENSES_YEARS_LIST); } } />
                    </View>
                </SafeAreaView>
            </>
        )
        return mainUIComponent;
    }
}

export default HomePage;