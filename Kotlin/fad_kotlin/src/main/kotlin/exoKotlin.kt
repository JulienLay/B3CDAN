fun main(args: Array<String>) {
    println("Hello World!")

    var v1:String = "toto"
    println(v1.uppercase())

    // Erreur de compilation : Null can not be a value of a non-null type String
    // v1 = null

    var v2:String? = "toto"
    println(v2?.uppercase())

    var v3:String? = null
    //println(v3.uppercase())
}