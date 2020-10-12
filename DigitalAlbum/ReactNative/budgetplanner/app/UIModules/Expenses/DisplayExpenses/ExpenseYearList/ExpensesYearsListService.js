import { GetAvailableYearsMonths, mainURL } from "../../../../Constants/URLConstants";

export const GetAvailableYearsMonthsData = async () => {
    try {
        //setLoaderVisibility(true);
        const url = mainURL + GetAvailableYearsMonths;

        fetch(url, {
            method: 'GET',
            headers: {
                Accept: '*/*',
                "Accept-Encoding": ["gzip", "deflate", "br"],
                "Connection": "keep-alive",
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            //setLoaderVisibility(false);
            return response.json();
        }).then((responseJSON) => {
            console.log(responseJSON);
            if (responseJSON.status_code === successStatusCode) {
                const _listItemsData = responseJSON.response_data;
                var listItemsData = [];
                for (let i = 0; i < _listItemsData.length; i++) {
                    const eachListItem = _listItemsData[i];
                    listItemsData.push({ ...eachListItem, isOpen: false });
                }
                setListItems(listItemsData);
            }
        }).catch((error) => {
            //setLoaderVisibility(false);
            console.log(error);
            Alert.alert("Error", "Unable to get data from server please try again later", [
                {
                    text: "OK",
                    onPress: () => { }
                }
            ]);
        });
    }
    catch (error) {
        console.log(error);
        setLoaderVisibility(false);
    }
}