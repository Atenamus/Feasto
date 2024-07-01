import React, { useMemo } from "react";
import { Text, FlatList, StyleSheet, View } from "react-native";
import { useCart } from "@context/cartContextProvider";
import { SafeAreaView } from "react-native-safe-area-context";
import { Trash } from "lucide-react-native";

const Cart = () => {
  const { cartItems, dispatch } = useCart();
  console.log(cartItems);
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }, [cartItems]);

  const deleteItemHandler = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: { id: id } });
  };

  return (
    <SafeAreaView style={styles.container}>
      {cartItems.length === 0 ? (
        <Text style={styles.emptyCart}>Add Items To Cart</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>Rs{item.price}</Text>
                <Trash
                  color={"#ff0000"}
                  size={24}
                  style={styles.trashIcon}
                  onPress={() => deleteItemHandler(item.id)}
                />
              </View>
            )}
          />
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>Rs{totalPrice}</Text>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  emptyCart: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  itemName: {
    fontSize: 16,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  trashIcon: {
    marginLeft: 10,
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ff0000",
  },
});

export default Cart;
