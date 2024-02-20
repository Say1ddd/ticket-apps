function useTicket() {
    while(true){
        const nama = prompt("Masukkan nama:");
        const umur = prompt("Masukkan umur:");
        if (umur > 13){
            const studio = prompt("Pilih studio: \n[A] Studio A \n[B] Studio B \n[C] Studio C").toUpperCase();
            if (studio === "A"){
                alert(`Tiket ${nama}, Studio A, Umur ${umur}`);
            } else if (studio === "B"){
                alert(`Tiket ${nama}, Studio B, Umur ${umur}`);
            } else if (studio === "C"){
                alert(`Tiket ${nama}, Studio C, Umur ${umur}`);
            } else {
                alert("tidak boleh masuk studio");
            }
        } else {
            alert("tidak boleh masuk studio");
        }
    }
}
