export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];
export type Database = {
  public: {
    Tables: {
      profiles: { Row: { id:string; full_name:string|null; avatar_url:string|null; role:string; skill_score:number; created_at:string; updated_at:string }; Insert: Partial<Omit<Database['public']['Tables']['profiles']['Row'],'id'>> & { id:string }; Update: Partial<Database['public']['Tables']['profiles']['Row']> };
      categories: { Row: { id:string; name:string; slug:string; created_at:string }; Insert: { id?:string; name:string; slug:string; created_at?:string }; Update: Partial<Database['public']['Tables']['categories']['Row']> };
      skills: { Row: { id:string; slug:string; title:string; category_id:string|null; level:string; duration_weeks:number|null; price_mzn:number; mentor_id:string|null; description:string|null; outcomes:Json; status:string; created_at:string; updated_at:string }; Insert: Partial<Omit<Database['public']['Tables']['skills']['Row'],'id'>> & { slug:string; title:string; level:string }; Update: Partial<Database['public']['Tables']['skills']['Row']> };
      exercises: { Row: { id:string; skill_id:string; title:string; description:string|null; position:number; max_score:number; accepted_file_types:string[]; max_file_size_mb:number; created_at:string }; Insert: Partial<Omit<Database['public']['Tables']['exercises']['Row'],'id'>> & { skill_id:string; title:string }; Update: Partial<Database['public']['Tables']['exercises']['Row']> };
      enrollments: { Row: { id:string; user_id:string; skill_id:string; status:string; progress:number; enrolled_at:string; completed_at:string|null }; Insert: Partial<Omit<Database['public']['Tables']['enrollments']['Row'],'id'>> & { user_id:string; skill_id:string }; Update: Partial<Database['public']['Tables']['enrollments']['Row']> };
      submissions: { Row: { id:string; exercise_id:string; user_id:string; file_path:string; file_name:string; status:string; submitted_at:string; updated_at:string }; Insert: Partial<Omit<Database['public']['Tables']['submissions']['Row'],'id'>> & { exercise_id:string; user_id:string; file_path:string; file_name:string }; Update: Partial<Database['public']['Tables']['submissions']['Row']> };
      reviews: { Row: { id:string; submission_id:string; reviewer_id:string; score:number|null; comments:string|null; status:string; reviewed_at:string }; Insert: Partial<Omit<Database['public']['Tables']['reviews']['Row'],'id'>> & { submission_id:string; reviewer_id:string }; Update: Partial<Database['public']['Tables']['reviews']['Row']> };
      certificates: { Row: { id:string; user_id:string; skill_id:string; verification_code:string; status:string; issued_at:string }; Insert: Partial<Omit<Database['public']['Tables']['certificates']['Row'],'id'>> & { user_id:string; skill_id:string; verification_code:string }; Update: Partial<Database['public']['Tables']['certificates']['Row']> };
      companies: { Row: { id:string; profile_id:string; company_name:string; sector:string|null; created_at:string }; Insert: Partial<Omit<Database['public']['Tables']['companies']['Row'],'id'>> & { profile_id:string; company_name:string }; Update: Partial<Database['public']['Tables']['companies']['Row']> };
      challenges: { Row: { id:string; company_id:string; title:string; description:string|null; deadline:string|null; status:string; created_at:string }; Insert: Partial<Omit<Database['public']['Tables']['challenges']['Row'],'id'>> & { company_id:string; title:string }; Update: Partial<Database['public']['Tables']['challenges']['Row']> };
      notifications: { Row: { id:string; user_id:string; title:string; body:string|null; read_at:string|null; created_at:string }; Insert: Partial<Omit<Database['public']['Tables']['notifications']['Row'],'id'>> & { user_id:string; title:string }; Update: Partial<Database['public']['Tables']['notifications']['Row']> };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};
