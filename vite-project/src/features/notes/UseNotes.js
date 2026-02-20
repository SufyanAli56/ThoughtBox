import { useEffect, useState } from "react";
import { supabase } from "../../infrastructure/supabase/supabaseClient";
import { loadNotes, addNote, removeNote } from "./notesService";

export function useNotes() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const init = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        setLoading(false);
        return;
      }

      setUser(session.user);

      const loaded = await loadNotes();
      setNotes(loaded);

      setLoading(false);
    };

    init();
  }, []);

  const login = async () => {
    const email = prompt("Enter your email");
    if (!email) return;

    await supabase.auth.signInWithOtp({ email });
    alert("Check your email for login link");
  };

  const logout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  const create = async (title, content) => {
    const created = await addNote({
      title,
      content,
      user_id: user.id,
    });

    setNotes((prev) => [created, ...prev]);
  };

  const remove = async (id) => {
    await removeNote(id);
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  return {
    notes,
    loading,
    user,
    login,
    logout,
    create,
    remove,
  };
}