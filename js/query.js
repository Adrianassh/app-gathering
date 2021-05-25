function fetchDataFromSQLiteDB() {
    var conn = SQL.connect({ Driver: "SQLite3", Database: "../sql/smart.db" });
    var result = conn.query("SELECT id FROM smart where id = 1;");
    if (result.isValid == false) {
        test.log("Result is not valid, maybe no entries in database?")
    } else {
        while (result.isValid) {
            var id = result.value(0)
            var forename = result.value(1)
            var surname = result.value(2)
            var email = result.value(3)
            var phone = result.value(4)
            addEntry(forename, surname, email, phone)
            result.toNext();
        }
        console.log("id = " + id)
    }
}   