import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal } from "react-native";
import { Ionicons, AntDesign, FontAwesome, FontAwesome5, Foundation } from '@expo/vector-icons';
import { Image } from 'react-native';
import { Box, Input, NativeBaseProvider, Button } from 'native-base';

/*
  const App = () => {

  }
  export default App;
*/
export default function App() {

  const [name, setName] = React.useState("200.00");
  const [modal, setModal] = React.useState(false);
  const [modalAdd, setModalAdd] = React.useState(0)// 1-ekle, 2-çıkar;
  const [modalSecond, setModalSecond] = React.useState(false);
  const [modalThird, setModalThird] = React.useState(false);
  const [modalFourth, setModalFourth] = React.useState(false);


  return (
    /* Logo ve ayarlar kısmı*/
    <NativeBaseProvider>
      <View style={styles.iconView}>
        <Image style={styles.iconImage} source={require('./assets/M.png')} />
        <TouchableOpacity
          onPress={() => {
            setModal(true)
          }}
        >
          <Ionicons style={styles.icon} name="settings-outline" size={30} color={"black"} />
        </TouchableOpacity>
      </View>


      {/* İhtiyaç Hesap  ve Şahsi Hesap kartlarının yan yana olması için row style a sahip View */}
      <View style={styles.container}>
        {/* İhtiyaç Hesap kartı */}
        <View style={styles.cardOne}>
          <TouchableOpacity
            onPress={() => {
              setName("300.00")
              setModal(true)
            }}
            style={styles.cardOneTouch}
          >
            <Text style={styles.cardOneName}>İhtiyaç Hesap</Text>
            <Text style={styles.cardOneTotal}>{name}₺</Text>
            <AntDesign style={styles.cardOneIcon} name="smileo" size={70} color="white" />
          </TouchableOpacity>
        </View>

        {/* İhtiyaç Hesap modalı */}
        <Modal
          transparent
          visible={modal}
          style={styles.modal}
        >
          <View style={styles.modalView}>
            <View style={styles.modalCard}>

              <TouchableOpacity
                onPress={() => {
                  setModal(false)
                }}
              >
                <View style={styles.modalClos}>
                  <FontAwesome name="times" size={40} color={"black"} />
                </View>
              </TouchableOpacity>

              <View style={{ paddingLeft: 20 }}>
                <Text style={styles.modalTittle}>İhtiyaç Hesap</Text>
                <Text style={styles.modalExplanation}>Para eklemek mi istiyorsun çıkarmak mı? </Text>
                <View style={styles.modalButtons}>
                  <Button
                    onPress={() => {
                      setModal(false)
                    }}
                    style={{ backgroundColor:'#008000', height: 30  }}
                  >
                    <Text style={{ marginHorizontal: 10,color:'white' }}>Ekle</Text>
                  </Button>

                  <Button
                    onPress={() => {
                      setModal(false)
                    }}
                    style={{ backgroundColor: '#DD2C00', height: 30 }}
                  >
                    <Text style={{ marginHorizontal: 10, color:'white' }}>Çıkar</Text>
                  </Button>

                </View>

                <Box top={30}>
                  <Input alignSelf={"center"} placeholder="Input" width="100px" />
                </Box>
              </View>
            </View>

            <Button
              onPress={() => {
                setModal(false)
              }}
              style={{ backgroundColor: 'green', height: 40, marginTop: 30 }}
            >
              <Text style={{ marginHorizontal: 80,color:'white' }}>Hesapla</Text>
            </Button>

          </View>
        </Modal>



        {/* Şahsi Hesap kartı */}
        <View style={styles.cardTwo}>
          <TouchableOpacity
            onPress={() => {
              setName("300.00")
              setModalSecond(true)
            }}
            style={styles.cardTwoTouch}
          >
            <Text style={styles.cardTwoName}>Şahsi Hesap</Text>
            <Text style={styles.cardTwoTotal}>{name}₺</Text>
            <FontAwesome style={styles.cardTwoIcon} name="user-secret" size={70} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Şahsi Hesap modalı */}
      <Modal
        transparent
        visible={modalSecond}
        style={styles.modal}
      >
        <View style={styles.modalView}>
          <View style={styles.modalCard}>
            <TouchableOpacity
              onPress={() => {
                setModalSecond(false)
              }}
            >
              <View style={styles.modalClos}>
                <FontAwesome name="times" size={40} color={"black"} />
              </View>
            </TouchableOpacity>
            <View style={{ paddingLeft: 20 }}>
              <Text style={styles.modalTittle}>Şahsi Hesap</Text>
              <Text style={styles.modalExplanation}>Para eklemek mi istiyorsun çıkarmak mı? </Text>
              <View style={styles.modalButtons}>
                <Button
                  onPress={() => {
                    setModal(false)
                  }}
                  //title="       Ekle        "
                  color="green"
                />
                <Button
                  onPress={() => {
                    setModal(false)
                  }}
                  // title="       Çıkar       "
                  color="red"
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>


      {/* Birikim Hesabı ve Yatırım Hesabı kartlarının yan yana olması için row style a sahip View */}
      <View style={styles.container}>
        {/* Birikim Hesabı kartı */}
        <View style={styles.cardThree}>
          <TouchableOpacity
            onPress={() => {
              setName("300.00")
              setModalThird(true)
            }}
            style={styles.cardThreeTouch}
          >
            <Text style={styles.cardThreeName}>Birikim Hesabı</Text>
            <Text style={styles.cardThreeTotal}>{name}₺</Text>
            <FontAwesome5 style={styles.cardThreeIcon} name="balance-scale-right" size={60} color="white" />

          </TouchableOpacity>

        </View>

        {/* Birikim Hesabı modalı */}
        <Modal
          transparent
          visible={modalThird}
          style={styles.modal}
        >
          <View style={styles.modalView}>
            <View style={styles.modalCard}>

              <TouchableOpacity
                onPress={() => {
                  setModalThird(false)
                }}
              >
                <View style={styles.modalClos}>
                  <FontAwesome name="times" size={40} color={"black"} />
                </View>
              </TouchableOpacity>
              <View style={{ paddingLeft: 20 }}>
                <Text style={styles.modalTittle}>Birikim Hesabı</Text>
                <Text style={styles.modalExplanation}>Para eklemek mi istiyorsun çıkarmak mı? </Text>
                <View style={styles.modalButtons}>
                  <Button
                    onPress={() => {
                      setModal(false)
                    }}
                    // title="       Ekle        "
                    color="green"
                  />
                  <Button
                    onPress={() => {
                      setModal(false)
                    }}
                    // title="       Çıkar       "
                    color="red"
                  />
                </View>
              </View>
            </View>
          </View>
        </Modal>

        {/* Yatırım Hesabı kartı */}
        <View style={styles.cardFour}>
          <TouchableOpacity
            onPress={() => {
              setName("300.00")
              setModalFourth(true)
            }}
            style={styles.cardFourTouch}
          >
            <Text style={styles.cardFourName}>Yatırım Hesabı</Text>
            <Text style={styles.cardFourTotal}>{name}₺</Text>
            <Foundation style={styles.cardFourIcon} name="dollar" size={100} color="white" />

          </TouchableOpacity>
        </View>
      </View>

      {/* Yatırım Hesabı modalı */}
      <Modal
        transparent
        visible={modalFourth}
        style={styles.modal}
      >
        <View style={styles.modalView}>
          <View style={styles.modalCard}>
            <TouchableOpacity
              onPress={() => {
                setModalFourth(false)
              }}
            >
              <View style={styles.modalClos}>
                <FontAwesome name="times" size={40} color={"black"} />
              </View>
            </TouchableOpacity>
            <View style={{ paddingLeft: 20 }}>
              <Text style={styles.modalTittle}>Yatırım Hesabı</Text>
              <Text style={styles.modalExplanation}>Para eklemek mi istiyorsun çıkarmak mı? </Text>
              <View style={styles.modalButtons}>
                <Button
                  onPress={() => {
                    setModal(false)
                  }}
                  // title="       Ekle        "
                  color="green"
                />
                <Button
                  onPress={() => {
                    setModal(false)
                  }}
                  // title="       Çıkar       "
                  color="red"
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* Toplam Hesapları ayrıntılı gösteren kart */}
      <View style={styles.totalView}>

        <View style={styles.total}>
          <Text style={styles.totalName}>Toplam Birikiminiz </Text>
          <Text style={styles.totalOne}>: +{name}₺</Text>
        </View>

        <View style={styles.total}>
          <Text style={styles.totalName}>Toplam Yatırımınız </Text>
          <Text style={styles.totalTwo}>: +{name}₺</Text>
        </View>


        <View style={styles.total}>
          <Text style={styles.totalName}>Şahsi Giderler </Text>
          <Text style={styles.totalThree}>: -{name}₺</Text>
        </View>


        <View style={styles.total}>
          <Text style={styles.totalName}>İhtiyaç Giderler </Text>
          <Text style={styles.totalFour}>: -{name}₺</Text>
        </View>


        <View style={styles.total}>
          <Text style={styles.totalName}>Toplam Giderler </Text>
          <Text style={styles.totalFive}>: -{name}₺</Text>
        </View>
      </View>

      {/* Tüm hesaplardan sonra toplam varlığın net hali */}
      <View style={styles.resultView}>
        <Text style={styles.resultName}>Toplam Varlığınız:</Text>

        <View style={styles.result}>
          <Text style={styles.resultText}>{name}₺</Text>
        </View>

      </View>

    </NativeBaseProvider>

  )
}


{/* Style Kodları */ }

const styles = StyleSheet.create({
  header: { flex: 1 },
  modal: { flex: 1 },
  modalView: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  modalCard: {
    backgroundColor: "white", width: 350, height: 250, borderRadius: 20,
    shadowColor: "#000", shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, padding: 20
  },
  modalClos: {
    left: 280,
    top: -8
  },
  modalTittle: {
    fontSize: 23,
    fontWeight: "bold",
    left: 75
  },
  modalExplanation: {
    fontSize: 18,
    top: 5
  },
  modalButtons: {
    top: 20,
    paddingLeft: 40,
    paddingRight: 60,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  iconView: {
    marginTop: 50,
    borderBottomWidth: 1,
    borderColor: '#DCDCDC',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconImage: {
    width: 40,
    height: 30,
    marginBottom: 10
  },
  icon: {
    position: "absolute",
    left: 150,
    bottom: 7
  },
  container: { flexDirection: "row" },
  cardOne: { marginLeft: 20, marginTop: 15 },
  cardOneTouch: {
    borderRadius: 20, width: 170, height: 180, backgroundColor: '#FFCCBC',
    shadowColor: "#000", shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, padding: 20
  },
  cardOneName: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    fontSize: 20
  },
  cardOneTotal: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginTop: 8,
    fontSize: 30
  },
  cardOneIcon: {
    position: "absolute",
    bottom: 8,
    left: 10
  },
  cardTwo: { marginLeft: 15, marginTop: 15 },
  cardTwoTouch: {
    borderRadius: 20, width: 170, height: 180, backgroundColor: '#FFECB3',
    shadowColor: "#000", shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, padding: 20
  },
  cardTwoName: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    fontSize: 20
  },
  cardTwoTotal: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginTop: 8,
    fontSize: 30
  },
  cardTwoIcon: {
    position: "absolute",
    bottom: 8,
    left: 10
  },
  cardThree: {
    marginTop: 20,
    marginLeft: 20
  },
  cardThreeTouch: {
    borderRadius: 20, width: 170, height: 180, backgroundColor: '#C8E6C9',
    shadowColor: "#000", shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, padding: 20
  },
  cardThreeName: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    fontSize: 20
  },
  cardThreeTotal: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginTop: 8,
    fontSize: 30
  },
  cardThreeIcon: {
    position: "absolute",
    bottom: 8,
    left: 10
  },
  cardFour: {
    marginLeft: 15,
    marginTop: 20
  },
  cardFourTouch: {
    borderRadius: 20, width: 170, height: 180, backgroundColor: '#D1C4E9',
    shadowColor: "#000", shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, padding: 20
  },
  cardFourName: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    fontSize: 20
  },
  cardFourTotal: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'flex-end',
    marginTop: 8,
    fontSize: 30
  },
  cardFourIcon: {
    position: "absolute",
    bottom: -8,
    left: 15
  },
  totalView: {
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 20,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 355,
    height: 180,
    padding: 20
  },
  total: { flexDirection: "row" },
  totalName: {
    color: 'black',
    margin: 5,
    fontWeight: "bold",
    fontSize: 15
  },
  totalOne: {
    color: 'green',
    fontWeight: 'bold',
    right: -90,
    fontSize: 17
  },
  totalTwo: {
    color: 'green',
    fontWeight: 'bold',
    right: -90,
    fontSize: 17
  },
  totalThree: {
    color: 'red',
    fontWeight: 'bold',
    right: -115,
    fontSize: 17
  },
  totalFour: {
    color: 'red',
    fontWeight: 'bold',
    right: -110,
    fontSize: 17
  },
  totalFive: {
    color: 'red',
    fontWeight: 'bold',
    right: -105,
    fontSize: 17
  },
  resultView: {
    alignItems: "center",
    marginTop: 10
  },
  resultName: {
    color: '#808080',
    fontWeight: 'bold'
  },
  result: {
    marginTop: 10,
    borderRadius: 100,
    backgroundColor: "green",
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultText: {
    color: 'white',
    fontWeight: 'bold'
  },

})